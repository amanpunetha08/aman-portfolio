import '../Blog.css'

const PATTERNS = [
  { pattern: 'Sliding Window', links: [
    { text: 'Algorithm Templates: Two Pointers Part 3', url: 'https://www.pluralsight.com/resources/blog/guides/algorithm-templates-two-pointers-part-3' },
    { text: 'Sliding Window template for substring problems', url: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/92007/' },
    { text: 'Most consistent ways of dealing with stock problems', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/108870/' },
  ]},
  { pattern: 'Array', links: [
    { text: 'General principles behind "Reverse Pairs" problems', url: 'https://leetcode.com/problems/reverse-pairs/solutions/97268/' },
  ]},
  { pattern: 'Binary Search', links: [
    { text: 'Binary Search 101 — The Ultimate Handbook', url: 'https://leetcode.com/problems/binary-search/solutions/423162/' },
  ]},
  { pattern: 'DFS / BFS', links: [
    { text: 'Python DFS template for Matrix', url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/438276/' },
    { text: 'LeetCode Pattern 1 — BFS/DFS (Part 1)', url: 'https://medium.com/leetcode-patterns/leetcode-pattern-1-bfs-dfs-25-of-the-problems-part-1-519450a84353' },
    { text: 'LeetCode Pattern 2 — DFS/BFS (Part 2)', url: 'https://medium.com/leetcode-patterns/leetcode-pattern-2-dfs-bfs-25-of-the-problems-part-2-a5b269597f52' },
    { text: 'Graph BFS/DFS Traversal (Video)', url: 'https://www.youtube.com/watch?v=TIbUeeksXcI' },
  ]},
  { pattern: 'Tree Traversal', links: [
    { text: 'Iterative Traversals on Trees', url: 'https://medium.com/leetcode-patterns/leetcode-pattern-0-iterative-traversals-on-trees-d373568eb0ec' },
    { text: 'Preorder, Inorder, Postorder Iteratively', url: 'https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/45551/' },
  ]},
  { pattern: 'Dynamic Programming', links: [
    { text: 'DP Patterns (Video)', url: 'https://www.youtube.com/watch?v=ZwDDLAeeBM0' },
    { text: 'How to solve DP string template — 4 steps', url: 'https://leetcode.com/discuss/general-discussion/651719/' },
    { text: 'From good to great — How to approach most DP problems', url: 'https://leetcode.com/problems/house-robber/solutions/156523/' },
  ]},
  { pattern: 'Intervals', links: [
    { text: 'LeetCode is Easy — The Interval Pattern', url: 'https://medium.com/@timpark0807/leetcode-is-easy-the-interval-pattern-d68a7c1c841' },
    { text: 'Concise template for overlapping interval problems', url: 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/93735/' },
    { text: 'General Pattern for greedy Interval problems', url: 'https://leetcode.com/discuss/general-discussion/794725/' },
  ]},
  { pattern: 'Two Pointers', links: [
    { text: 'Algorithm Templates: Two Pointers Part 1', url: 'https://www.pluralsight.com/resources/blog/guides/algorithm-templates-two-pointers-part-1' },
    { text: 'Algorithm Templates: Two Pointers Part 2', url: 'https://www.pluralsight.com/resources/blog/guides/algorithm-templates-two-pointers-part-2' },
  ]},
  { pattern: 'Sum', links: [
    { text: 'Sum MegaPost — Python3 with detailed explanation', url: 'https://leetcode.com/problems/two-sum/solutions/737092/' },
  ]},
  { pattern: 'Monotonic Stack', links: [
    { text: 'Stack solution with detailed step-by-step explanation', url: 'https://leetcode.com/problems/sum-of-subarray-minimums/solutions/178876/' },
  ]},
  { pattern: 'Word Break', links: [
    { text: 'Python Template — Word Break I, II, Concatenated Words', url: 'https://leetcode.com/problems/concatenated-words/solutions/836924/' },
  ]},
  { pattern: 'Bit Manipulation', links: [
    { text: 'How to use bit manipulation to solve problems', url: 'https://leetcode.com/problems/sum-of-two-integers/solutions/84278/' },
    { text: 'Bitwise operation method for single numbers', url: 'https://leetcode.com/problems/single-number-ii/solutions/43295/' },
  ]},
  { pattern: 'Trie', links: [
    { text: 'Beginner friendly guide to Trie — tutorial + practice', url: 'https://leetcode.com/discuss/general-discussion/931977/' },
  ]},
  { pattern: 'Combination', links: [
    { text: 'C++ template for ALL Combination Problem Set', url: 'https://leetcode.com/problems/combination-sum-iv/solutions/85120/' },
  ]},
  { pattern: 'Backtracking', links: [
    { text: 'LeetCode Pattern 3 — Backtracking', url: 'https://medium.com/leetcode-patterns/leetcode-pattern-3-backtracking-5d9e5a03dc26' },
    { text: 'Backtrack Summary — General Solution for 10 Questions', url: 'https://leetcode.com/problems/permutations/solutions/18284/' },
    { text: 'General approach to backtracking in Java', url: 'https://leetcode.com/problems/combination-sum/solutions/16502/' },
  ]},
]

function LeetCodePatterns() {
  return (
    <div className="blog-rich-content">
      <p>Mastering LeetCode isn't about solving 1000 problems. It's about recognizing patterns. Once you learn the core templates, most problems become variations of something you've already seen.</p>
      <p>Below are 15 essential patterns with links to the best resources for each.</p>
      <table className="blog-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Pattern</th>
            <th>Resources</th>
          </tr>
        </thead>
        <tbody>
          {PATTERNS.map((p, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{p.pattern}</td>
              <td>
                {p.links.map((link, j) => (
                  <div key={j}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LeetCodePatterns
