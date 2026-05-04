import { useEffect, useState } from "react";
import './DailyProgress.css';

const REPOS = [
    { owner: 'amanpunetha08', name: 'DSA' },
]

function DailyProgress() {
    interface RepoData {
        name: string
        description: string
        commits: number
        lastPush: string
        url: string
    }

    const [repos, setRepos] = useState<RepoData[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchRepos() {
            const results: RepoData[] = [];
            for (const { owner, name } of REPOS) {
                try {
                    // 1. Fetch repo info
                    const repoRes = await fetch(`https://api.github.com/repos/${owner}/${name}`)
                    const repoJson = await repoRes.json()

                    // 2. Fetch commits (page=1,per_page=1) to get total count from Link header
                    const commitsRes = await fetch(`https://api.github.com/repos/${owner}/${name}/commits?per_page=1`)
                    const link = commitsRes.headers.get('Link')
                    const match = link?.match(/page=(\d+)>; rel='last'/)
                    const totalCommits = match ? parseInt(match[1]) : 1

                    results.push({
                        name: repoJson.name,
                        description: repoJson.description || 'DSA practice repository',
                        commits: totalCommits,
                        lastPush: new Date(repoJson.pushed_at).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        }).replace(/(\d+)/, (d) => d + (['st', 'nd', 'rd'][((+d + 90) % 100 - 10) % 10 - 1] || 'th')),
                        url: repoJson.html_url
                    })
                } catch {
                    // skip failed repos
                }
            }
            setRepos(results)
            setLoading(false)
        }
        fetchRepos()
    }, [])


    return (
        <section className="daily-progress" id='progress'>
            <h2 className="section-title">Repositories</h2>
            <div className="progress-track">
                {loading ? (
                    <p className="progress-loading">Loading...</p>
                ) : repos.length > 0 ? (
                    repos.map((repo) => (
                        <div className="progress-card-wrapper" key={repo.name}>
                            <a href={repo.url} target="_blank" rel="noopener noreferrer" className="progress-card">
                                <div className="card-front">
                                    <h3>{repo.name}</h3>
                                    <p>{repo.description}</p>
                                </div>
                                <div className="card-back">
                                    <span className="stat-badge">🔥 {repo.commits} commits</span>
                                    <span className="stat-badge">📅 {repo.lastPush}</span>
                                </div>
                            </a>
                        </div>
                    ))) : (
                    <p>Failed to load data</p>
                )}
            </div>
        </section>
    )
}

export default DailyProgress