import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

export default function Sitemap(): JSX.Element {
  return (
    <>
      <Head>
        <title>Sitemap | UAICP - Universal AI Communication Protocol</title>
        <meta name="description" content="Complete sitemap of UAICP website including all documentation, guides, examples, and resources." />
      </Head>
      
      <Layout title="Sitemap" description="Complete sitemap of UAICP website">
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h1>Site Map</h1>
              <p>Find all pages and resources available on the UAICP website.</p>
              
              <div className="row margin-top--lg">
                <div className="col col--6">
                  <h3>📋 Specification</h3>
                  <ul>
                    <li><Link to="/docs/specification/introduction">Introduction to UAICP</Link></li>
                    <li><Link to="/docs/specification/quick-start">Quick Start Guide</Link></li>
                    <li><Link to="/docs/specification/">Core Specification</Link></li>
                  </ul>
                  
                  <h3>🚀 Integration Guides</h3>
                  <ul>
                    <li><Link to="/docs/integration-guides/overview">Integration Overview</Link></li>
                    <li><Link to="/docs/integration-guides/mcp-integration">MCP Integration Guide</Link></li>
                  </ul>
                  
                  <h3>🛠️ Examples</h3>
                  <ul>
                    <li><Link to="/docs/examples/use-cases">UAICP Use Cases & Examples</Link></li>
                  </ul>
                </div>
                
                <div className="col col--6">
                  <h3>📝 Blog</h3>
                  <ul>
                    <li><Link to="/blog">All Blog Posts</Link></li>
                    <li><Link to="/blog/introducing-uaicp">Introducing UAICP</Link></li>
                    <li><Link to="/blog/tags">Blog Tags</Link></li>
                  </ul>
                  
                  <h3>👥 Community</h3>
                  <ul>
                    <li><Link to="/community">Community Hub</Link></li>
                  </ul>
                  
                  <h3>⚖️ Governance</h3>
                  <ul>
                    <li><Link to="/docs/governance/overview">Governance Overview</Link></li>
                    <li><Link to="/docs/governance/contributing">Contributing Guide</Link></li>
                  </ul>
                  
                  <h3>🔗 External Resources</h3>
                  <ul>
                    <li><a href="https://github.com/UAICP" target="_blank" rel="noopener noreferrer">GitHub Organization</a></li>
                    <li><a href="https://github.com/UAICP/uaicp_specification" target="_blank" rel="noopener noreferrer">Specification Repository</a></li>
                    <li><a href="https://community.uaicp.org" target="_blank" rel="noopener noreferrer">Community Forum</a></li>
                    <li><a href="https://uaicp.slack.com" target="_blank" rel="noopener noreferrer">Slack Community</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="margin-top--lg">
                <h3>🤖 For Search Engines</h3>
                <p>
                  Looking for our XML sitemap? Visit <Link to="/sitemap.xml">sitemap.xml</Link> for the machine-readable version.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
