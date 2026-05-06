function BuildingRAGChatbot() {
  return (
    <article className="blog-article">
      <p>
        Large Language Models are powerful, but they lie. They confidently fabricate facts about you, your company, and your projects. If you ask ChatGPT about your resume, it will make up job titles, invent projects, and hallucinate skills you have never heard of. It does this with complete confidence.
      </p>
      <p>
        I needed a chatbot on my portfolio that could answer questions about my experience and projects. But it had to be grounded — every answer must come from my actual documents. If the answer is not in the knowledge base, the bot should say so, not invent something plausible.
      </p>
      <p>
        The solution is RAG — Retrieval-Augmented Generation. Instead of hoping the LLM knows about you, you retrieve relevant document chunks first, then ask the LLM to answer based only on those chunks. The model becomes a reasoning engine over your data, not a generator of plausible fiction.
      </p>

      <h3>How RAG Actually Works</h3>
      <p>
        The idea is deceptively simple. You take your documents — PDFs, text files, markdown — and split them into small chunks. You convert each chunk into a vector using an embedding model. You store these vectors in a database optimized for similarity search.
      </p>
      <p>
        When a user asks a question, you embed their question with the same model, search for the most similar chunks, and feed those chunks to the LLM as context.
      </p>

      <div className="blog-diagram">
        <pre>{`User Query
    │
    ▼
┌──────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Embed Query │────▶│  Vector Search    │────▶│  Top-K Chunks   │
│  (MiniLM)    │     │  (ChromaDB)       │     │  (most similar) │
└──────────────┘     └──────────────────┘     └────────┬────────┘
                                                       │
                                                       ▼
                                              ┌─────────────────┐
                                              │  LLM + Context  │
                                              │  = Grounded     │
                                              │    Answer        │
                                              └─────────────────┘`}</pre>
      </div>

      <div className="blog-callout">
        <p><strong>Key insight:</strong> You never fine-tune the model. You never retrain anything. When your information changes, you just re-index your documents. The model stays the same — only the context changes.</p>
      </div>

      <h3>The Architecture</h3>
      <p>
        The system has four decoupled layers, each independently replaceable:
      </p>

      <div className="blog-diagram">
        <pre>{`┌─────────────────────────────────────────────────────────────┐
│                     DJANGO REST API                          │
│                                                             │
│   ChatView → Session Manager → NLP Provider → Plugin System │
│                     │                  │                     │
│                     ▼                  ▼                     │
│              ┌───────────┐    ┌────────────────┐            │
│              │   Redis   │    │   ChromaDB     │            │
│              │ (Sessions)│    │ (Vector Store) │            │
│              └───────────┘    └────────────────┘            │
└─────────────────────────────────────────────────────────────┘`}</pre>
      </div>

      <p>
        The request flow: client sends a message, the session manager stores it in Redis, the NLP provider retrieves relevant chunks from ChromaDB and generates a response via the LLM, the plugin registry checks if a specialized handler should take over, and the response goes back.
      </p>

      <h3>Technology Choices</h3>

      <table className="blog-table">
        <thead><tr><th>Component</th><th>Choice</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td>Framework</td><td>Django + DRF</td><td>Fast REST APIs, management commands for indexing</td></tr>
          <tr><td>Vector DB</td><td>ChromaDB</td><td>Free, local, persistent, no API key needed</td></tr>
          <tr><td>Embeddings</td><td>all-MiniLM-L6-v2</td><td>384-dim, 80ms inference, runs locally</td></tr>
          <tr><td>LLM</td><td>Groq (default)</td><td>Fastest inference (~200ms), free tier</td></tr>
          <tr><td>Sessions</td><td>Redis</td><td>Sub-ms reads, TTL for auto-expiry</td></tr>
          <tr><td>Deployment</td><td>Docker + HuggingFace</td><td>Free hosting, reproducible builds</td></tr>
        </tbody>
      </table>

      <h3>Chunking — Where Most People Get It Wrong</h3>
      <p>
        The most important decision in a RAG pipeline is not which LLM you use. It is how you chunk your documents.
      </p>
      <p>
        Too small — 100 characters — and each chunk is a sentence fragment. The search returns relevant fragments, but the LLM cannot form a coherent answer. Too large — 2000 characters — and irrelevant content dilutes the match.
      </p>

      <div className="blog-code-block">
        <strong>Chunking Strategy</strong>
        <pre>{`Chunk Size: 500 characters
Overlap:    50 characters

Document: "ABCDEFGHIJ..." (1000 chars)

Chunk 1:  chars 0–500
Chunk 2:  chars 450–950    ← 50 char overlap
Chunk 3:  chars 900–1000   ← 50 char overlap

The overlap ensures sentences spanning chunk boundaries
appear in both chunks. At least one will match the query.`}</pre>
      </div>

      <div className="blog-callout">
        <p><strong>Why 500?</strong> It is roughly 2–3 sentences. Enough context for a meaningful answer, short enough that irrelevant content does not dilute the match. I tested 200, 500, and 1000 — 500 consistently produced the best retrieval quality.</p>
      </div>

      <h3>The Anti-Hallucination Layer</h3>
      <p>
        This is the part most RAG tutorials skip, and it is the most important part of the entire system.
      </p>
      <p>
        Not every question has an answer in your knowledge base. If someone asks "What is the weather today?" and your KB only contains your resume, the vector search will still return results — they will just be irrelevant. Without filtering, the LLM will try to answer using those irrelevant chunks, and hallucination creeps back in.
      </p>

      <div className="blog-code-block">
        <strong>Relevance Thresholds</strong>
        <pre>{`RELEVANCE_THRESHOLD = 1.8       # Normal messages (3+ words)
SHORT_MESSAGE_THRESHOLD = 1.4   # Short messages (1-2 words)

# If best chunk distance > threshold → decline to answer
# "I don't have information about that"

# Why stricter for short messages?
# "Hi" matches random chunks with moderate similarity.
# Without stricter threshold, greetings trigger KB responses.`}</pre>
      </div>

      <p>
        The result: zero hallucination on out-of-scope questions. The bot either answers from the knowledge base or honestly says it does not know.
      </p>

      <h3>Multiple LLM Providers</h3>
      <p>
        The system supports five providers, switchable with a single environment variable:
      </p>

      <div className="blog-code-block">
        <strong>Provider Configuration</strong>
        <pre>{`NLP_PROVIDER=groq        # Groq — fastest, free tier
NLP_PROVIDER=openai      # GPT-3.5 / GPT-4
NLP_PROVIDER=gemini      # Google Gemini
NLP_PROVIDER=grok        # xAI Grok
NLP_PROVIDER=rule_based  # Offline pattern matching

# Each provider implements one method:
def process(self, message, context=None) -> dict:
    return { "intent": ..., "confidence": ..., "response": ... }`}</pre>
      </div>

      <div className="blog-callout">
        <p><strong>Why this matters:</strong> During development, I hit OpenAI's rate limit at 2am. Switching to Groq took 10 seconds — change the env var, restart. No code changes. LLM APIs go down, change pricing, deprecate models. Provider abstraction is survival.</p>
      </div>

      <h3>Session Management</h3>
      <p>
        A chatbot without memory is not a chatbot. It is a search engine with extra steps.
      </p>
      <p>
        Each conversation gets a UUID session ID. Messages are stored as a Redis list with a 24-hour TTL. The full history is passed to the NLP provider as context, so follow-up questions work naturally.
      </p>

      <div className="blog-code-block">
        <strong>Session Design</strong>
        <pre>{`# Redis key: "chat:{session_id}"
# TTL: 86400 seconds (24 hours)
# Each message:
{ "role": "user",      "content": "...", "timestamp": "..." }
{ "role": "assistant", "content": "...", "timestamp": "..." }

# Fallback: if Redis unavailable → in-memory dict
# Same interface, zero config for development`}</pre>
      </div>

      <h3>Docker and Cold Starts</h3>
      <p>
        The embedding model is 90MB. On first run, Sentence Transformers downloads it from HuggingFace — 30+ seconds of startup latency. Unacceptable.
      </p>

      <div className="blog-code-block">
        <strong>Dockerfile Optimization</strong>
        <pre>{`FROM python:3.12-slim

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

# Download model at BUILD time, not runtime
RUN python -c "from sentence_transformers import SentenceTransformer; \\
    SentenceTransformer('all-MiniLM-L6-v2')"

# Index knowledge base at BUILD time
RUN python manage.py index_knowledge --reset

# Result: zero cold-start latency
CMD ["gunicorn", "chatbot.wsgi:application", "--bind", "0.0.0.0:7860"]`}</pre>
      </div>

      <p>
        The first request is as fast as the hundredth. No model downloads, no indexing — everything is baked into the image.
      </p>

      <h3>Results</h3>

      <table className="blog-table">
        <thead><tr><th>Metric</th><th>Value</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>Vector search</td><td>~50ms</td><td>Local ChromaDB, no network hop</td></tr>
          <tr><td>End-to-end (Groq)</td><td>~800ms</td><td>Embed + search + LLM generation</td></tr>
          <tr><td>End-to-end (OpenAI)</td><td>~1.5s</td><td>GPT-3.5-turbo</td></tr>
          <tr><td>Indexing speed</td><td>~2s</td><td>For a 10-page PDF</td></tr>
          <tr><td>Hallucination rate</td><td>0%</td><td>Threshold filtering prevents it</td></tr>
        </tbody>
      </table>

      <h3>What I Would Do Differently</h3>
      <p>
        <strong>Streaming responses.</strong> The current system waits for the full LLM response before sending anything back. With SSE, the user sees tokens appear in real-time, making 800ms feel instant.
      </p>
      <p>
        <strong>Feedback loop.</strong> Let users thumbs-up or thumbs-down responses. Store that signal. Over time, identify which chunks produce good answers and which produce bad ones — the cheapest way to improve RAG quality without touching the model.
      </p>
      <p>
        <strong>Hybrid search.</strong> Combine vector similarity with keyword matching (BM25). Some queries are better served by exact keyword match than semantic similarity. A hybrid approach catches both.
      </p>

      <h3>Key Takeaways</h3>
      <ul>
        <li><strong>RAG beats fine-tuning</strong> for domain-specific Q&A — cheaper, faster to update, no training</li>
        <li><strong>Threshold filtering is non-negotiable</strong> — without it, the bot answers with irrelevant content</li>
        <li><strong>Provider abstraction is survival</strong> — APIs go down, switch in seconds</li>
        <li><strong>Graceful degradation everywhere</strong> — Redis fallback, rule-based fallback, threshold fallback</li>
        <li><strong>Build-time optimization matters</strong> — pre-download models, pre-index during Docker build</li>
      </ul>

      <h3>Source Code</h3>
      <p>
        The complete implementation is on GitHub: <a href="https://github.com/amanpunetha08/Chat-Bot" target="_blank" rel="noopener noreferrer">github.com/amanpunetha08/Chat-Bot</a>
      </p>
    </article>
  )
}

export default BuildingRAGChatbot
