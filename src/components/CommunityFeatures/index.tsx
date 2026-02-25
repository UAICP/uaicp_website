import React, { useState, useEffect } from 'react';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type: 'User' | 'Bot';
}

export const ContributorShowcase: React.FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch contributors from GitHub API (no auth required for public repos)
    fetch('https://api.github.com/repos/UAICP/uaicp_specification/contributors')
      .then(response => response.json())
      .then(data => {
        setContributors(data.filter((c: Contributor) => c.type === 'User').slice(0, 12));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading contributors...</div>;

  return (
    <div className="contributor-showcase">
      <h3>👥 Our Contributors</h3>
      <div className="contributor-grid">
        {contributors.map(contributor => (
          <div key={contributor.login} className="contributor-card">
            <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
              <img 
                src={contributor.avatar_url} 
                alt={contributor.login}
                className="contributor-avatar"
              />
              <div className="contributor-info">
                <div className="contributor-name">{contributor.login}</div>
                <div className="contributor-stats">{contributor.contributions} contributions</div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="contributor-cta">
        <a 
          href="https://github.com/UAICP/uaicp_specification" 
          className="button button--primary"
        >
          Join Our Contributors
        </a>
      </div>
    </div>
  );
};

export const GitHubStats: React.FC = () => {
  const [stats, setStats] = useState({
    stars: 0,
    forks: 0,
    issues: 0,
    contributors: 0
  });

  useEffect(() => {
    Promise.all([
      fetch('https://api.github.com/repos/UAICP/uaicp_specification'),
      fetch('https://api.github.com/repos/UAICP/uaicp_specification/contributors')
    ])
    .then(async ([repoRes, contributorsRes]) => {
      const repo = await repoRes.json();
      const contributors = await contributorsRes.json();
      
      setStats({
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        issues: repo.open_issues_count || 0,
        contributors: contributors.length || 0
      });
    })
    .catch(() => {
      // Fallback to mock data if API fails
      setStats({
        stars: 45,
        forks: 12,
        issues: 8,
        contributors: 15
      });
    });
  }, []);

  return (
    <div className="github-stats">
      <div className="stat-item">
        <div className="stat-number">{stats.stars}</div>
        <div className="stat-label">GitHub Stars</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">{stats.contributors}</div>
        <div className="stat-label">Contributors</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">{stats.forks}</div>
        <div className="stat-label">Forks</div>  
      </div>
      <div className="stat-item">
        <div className="stat-number">{stats.issues}</div>
        <div className="stat-label">Open Issues</div>
      </div>
    </div>
  );
};

export const QuickContribute: React.FC = () => {
  return (
    <div className="quick-contribute">
      <h3>🚀 Quick Ways to Contribute</h3>
      <div className="contribute-options">
        <div className="contribute-option">
          <h4>📝 Fix Documentation</h4>
          <p>Found a typo or unclear section? Click "Edit this page" on any doc page.</p>
          <div className="contribute-steps">
            <span className="step">1. Click edit</span>
            <span className="step">2. Sign in with GitHub</span>
            <span className="step">3. Make changes</span>
            <span className="step">4. Submit PR</span>
          </div>
        </div>
        
        <div className="contribute-option">
          <h4>🐛 Report Issues</h4>
          <p>Found a bug or have a feature idea? Open an issue.</p>
          <a 
            href="https://github.com/UAICP/uaicp_specification/issues/new/choose"
            className="button button--secondary"
          >
            Open Issue
          </a>
        </div>
        
        <div className="contribute-option">
          <h4>💬 Join Discussion</h4>
          <p>Ask questions, share ideas, help others in GitHub Discussions.</p>
          <a 
            href="https://github.com/UAICP/uaicp_specification/discussions"
            className="button button--secondary"
          >
            Join Discussion
          </a>
        </div>
      </div>
    </div>
  );
};

export const ImplementationShowcase: React.FC = () => {
  const implementations = [
    {
      name: "UAICP Python Client",
      description: "Official Python client library for UAICP",
      language: "Python",
      author: "UAICP Team",
      url: "https://github.com/UAICP/uaicp-python",
      status: "Official"
    },
    {
      name: "UAICP JavaScript SDK", 
      description: "JavaScript/TypeScript SDK for web and Node.js",
      language: "TypeScript",
      author: "UAICP Team", 
      url: "https://github.com/UAICP/uaicp-js",
      status: "Official"
    },
    {
      name: "MCP-UAICP Bridge",
      description: "Bridge between Anthropic MCP and UAICP",
      language: "Go",
      author: "Community",
      url: "https://github.com/example/mcp-uaicp-bridge",
      status: "Community"
    }
  ];

  return (
    <div className="implementation-showcase">
      <h3>🛠️ Community Implementations</h3>
      <div className="implementation-grid">
        {implementations.map(impl => (
          <div key={impl.name} className="implementation-card">
            <div className="implementation-header">
              <h4>{impl.name}</h4>
              <span className={`status-badge ${impl.status.toLowerCase()}`}>
                {impl.status}
              </span>
            </div>
            <p>{impl.description}</p>
            <div className="implementation-meta">
              <span className="language">{impl.language}</span>
              <span className="author">by {impl.author}</span>
            </div>
            <a href={impl.url} className="button button--outline">
              View Project
            </a>
          </div>
        ))}
      </div>
      <div className="showcase-cta">
        <p>Built something with UAICP? We'd love to showcase it!</p>
        <a 
          href="https://github.com/UAICP/uaicp_specification/issues/new?template=showcase.yml"
          className="button button--primary"
        >
          Submit Your Implementation
        </a>
      </div>
    </div>
  );
};
