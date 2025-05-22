import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { GitHubStats, QuickContribute, ContributorShowcase, ImplementationShowcase } from '@site/src/components/CommunityFeatures';

const CommunityPage = () => {
  return (
    <Layout title="Community" description="Join the UAICP community">
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>UAICP Community</h1>
          <p className="lead">
            Join developers, researchers, and organizations building the future of AI interoperability
          </p>
        </div>

        {/* GitHub Stats */}
        <section className="margin-bottom--lg">
          <GitHubStats />
        </section>

        {/* Getting Started Section */}
        <section className="margin-bottom--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h2>🚀 Getting Started</h2>
              <p>
                Contributing to UAICP is straightforward and follows standard open source practices. 
                No special registration required - just use your existing GitHub account!
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contribute */}
        <section className="margin-bottom--lg">
          <QuickContribute />
        </section>

        {/* Contribution Methods */}
        <section className="margin-bottom--lg">
          <h2 className="text--center margin-bottom--md">Ways to Contribute</h2>
          <div className="row">
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <h3>📝 Documentation</h3>
                </div>
                <div className="card__body">
                  <p>Improve specification, add examples, fix typos, or write integration guides.</p>
                  <ul>
                    <li>Click "Edit this page" on any doc</li>
                    <li>GitHub automatically creates PR</li>
                    <li>No complex setup required</li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link 
                    className="button button--primary button--block"
                    to="/docs/specification">
                    Edit Documentation
                  </Link>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <h3>🐛 Issues & Ideas</h3>
                </div>
                <div className="card__body">
                  <p>Report bugs, suggest features, or discuss specification improvements.</p>
                  <ul>
                    <li>No code required</li>
                    <li>GitHub login only</li>
                    <li>Community discussion</li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link 
                    className="button button--primary button--block"
                    href="https://github.com/UAICP/uaicp_specification/issues">
                    Open Issue
                  </Link>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <h3>💻 Implementation</h3>
                </div>
                <div className="card__body">
                  <p>Build reference implementations, client libraries, or integrations.</p>
                  <ul>
                    <li>Fork repository</li>
                    <li>Standard Git workflow</li>
                    <li>Code review process</li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link 
                    className="button button--primary button--block"
                    href="https://github.com/UAICP">
                    View Repositories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Platforms */}
        <section className="margin-bottom--lg">
          <h2 className="text--center margin-bottom--md">Community Platforms</h2>
          <div className="row">
            <div className="col col--6">
              <div className="card">
                <div className="card__header">
                  <h3>GitHub - Primary Hub</h3>
                </div>
                <div className="card__body">
                  <p><strong>All technical contributions happen here:</strong></p>
                  <ul>
                    <li><strong>Issues:</strong> Bug reports, feature requests</li>
                    <li><strong>Discussions:</strong> Q&A, implementation help</li>
                    <li><strong>Pull Requests:</strong> Code and documentation changes</li>
                    <li><strong>Projects:</strong> Roadmap tracking</li>
                  </ul>
                  <p><em>Requires: GitHub account (free)</em></p>
                </div>
                <div className="card__footer">
                  <div className="button-group button-group--block">
                    <Link 
                      className="button button--primary"
                      href="https://github.com/UAICP/uaicp_specification">
                      Specification Repo
                    </Link>
                    <Link 
                      className="button button--secondary"
                      href="https://github.com/UAICP/uaicp_specification/discussions">
                      Discussions
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col--6">
              <div className="card">
                <div className="card__header">
                  <h3>Community Forums</h3>
                </div>
                <div className="card__body">
                  <p><strong>Extended community engagement:</strong></p>
                  <ul>
                    <li><strong>Discord:</strong> Real-time chat and quick help</li>
                    <li><strong>Slack:</strong> Professional/enterprise discussions</li>
                    <li><strong>Forum:</strong> Long-form discussions</li>
                    <li><strong>Mailing List:</strong> Important announcements</li>
                  </ul>
                  <p><em>Each platform has its own login</em></p>
                </div>
                <div className="card__footer">
                  <div className="button-group button-group--block">
                    <Link 
                      className="button button--secondary"
                      href="https://community.uaicp.org">
                      Community Forum
                    </Link>
                    <Link 
                      className="button button--secondary"
                      href="https://uaicp.slack.com">
                      Slack
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contributors Showcase */}
        <section className="margin-bottom--lg">
          <ContributorShowcase />
        </section>

        {/* Implementation Showcase */}
        <section className="margin-bottom--lg">
          <ImplementationShowcase />
        </section>

        {/* No Login Required Section */}
        <section className="margin-bottom--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className="card" style={{background: 'var(--ifm-color-success-contrast-background)'}}>
                <div className="card__header">
                  <h3>✅ No Login Required</h3>
                </div>
                <div className="card__body">
                  <p><strong>You can access everything without signing up:</strong></p>
                  <div className="row">
                    <div className="col col--6">
                      <ul>
                        <li>Read full specification</li>
                        <li>Browse all documentation</li>
                        <li>View implementation examples</li>
                        <li>Access integration guides</li>
                      </ul>
                    </div>
                    <div className="col col--6">
                      <ul>
                        <li>Download reference implementations</li>
                        <li>View community showcase</li>
                        <li>Read blog posts</li>
                        <li>See contributor galleries</li>
                      </ul>
                    </div>
                  </div>
                  <p className="margin-bottom--none">
                    <em>Login is only needed when you want to contribute changes or participate in discussions.</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Contribution */}
        <section className="margin-bottom--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h2>🎯 Quick Start: Make Your First Contribution</h2>
              <div className="card">
                <div className="card__body">
                  <ol>
                    <li><strong>Find something to improve:</strong> Browse our <Link to="/docs/specification/introduction">documentation</Link> and look for typos, unclear sections, or missing examples</li>
                    <li><strong>Click "Edit this page":</strong> Every documentation page has an edit button that opens GitHub</li>
                    <li><strong>Sign in with GitHub:</strong> Use your existing GitHub account (create one if needed - it's free)</li>
                    <li><strong>Make your changes:</strong> Edit directly in the browser using GitHub's editor</li>
                    <li><strong>Submit pull request:</strong> GitHub guides you through creating a PR</li>
                    <li><strong>Get reviewed:</strong> Community members review and provide feedback</li>
                    <li><strong>Get merged:</strong> Once approved, your changes go live automatically!</li>
                  </ol>
                </div>
                <div className="card__footer">
                  <Link 
                    className="button button--primary button--lg"
                    to="/docs/specification/introduction">
                    Start Reading & Editing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code of Conduct */}
        <section>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className="card">
                <div className="card__header">
                  <h3>📋 Community Guidelines</h3>
                </div>
                <div className="card__body">
                  <p>
                    UAICP follows the <strong>Contributor Covenant Code of Conduct</strong>. 
                    We're committed to providing a welcoming and inclusive environment for all contributors.
                  </p>
                  <ul>
                    <li>Be respectful and inclusive</li>
                    <li>Focus on constructive feedback</li>
                    <li>Help newcomers get started</li>
                    <li>Follow technical best practices</li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link 
                    className="button button--secondary"
                    to="/docs/governance/code-of-conduct">
                    Read Full Code of Conduct
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CommunityPage;
