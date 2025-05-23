import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.statusBadge}>✨ In Development</div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          An open specification for universal AI system communication and interoperability. 
          Enabling seamless interaction between different AI systems, platforms, and services.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/specification/introduction">
            📋 View Specification
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/integration-guides/overview">
            🚀 Integration Guides
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/UAICP">
            💻 GitHub Organization
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  const enhancedDescription = "Discover UAICP, the open specification enabling universal AI communication and interoperability. Bridge different AI systems, protocols, and platforms with our comprehensive framework for seamless artificial intelligence integration.";
  
  return (
    <>
      <Head>
        {/* Enhanced meta description */}
        <meta name="description" content={enhancedDescription} />
        <meta property="og:description" content={enhancedDescription} />
        <meta name="twitter:description" content={enhancedDescription} />
        
        {/* Additional SEO meta tags */}
        <meta name="twitter:title" content="UAICP - Universal AI Communication Protocol | Open AI Interoperability Standard" />
        <meta property="og:title" content="UAICP - Universal AI Communication Protocol | Open AI Interoperability Standard" />
        
        {/* Schema markup for the homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "UAICP - Universal AI Communication Protocol",
            "description": enhancedDescription,
            "url": "https://uaicp.org",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Universal AI Communication Protocol",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Cross-platform",
              "description": "Open specification for universal AI system communication and interoperability",
              "downloadUrl": "https://github.com/UAICP/uaicp_specification",
              "author": {
                "@type": "Organization",
                "name": "UAICP Project"
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://uaicp.org"
                }
              ]
            }
          })}
        </script>
      </Head>
      
      <Layout
        title="UAICP - Universal AI Communication Protocol | Open AI Interoperability Standard"
        description={enhancedDescription}>
        <HomepageHeader />
        <main>
          <HomepageFeatures />
          
          {/* What is UAICP Section */}
          <section className={styles.aboutSection}>
            <div className="container">
              <div className="row">
                <div className="col col--8 col--offset-2">
                  <h2 className={styles.sectionTitle}>What is UAICP?</h2>
                  <p className={styles.sectionDescription}>
                    The Universal AI Communication Protocol (UAICP) is an open specification designed to enable 
                    standardized communication between artificial intelligence systems. It provides a framework 
                    for AI interoperability, allowing different AI systems to communicate, share data, and 
                    collaborate effectively regardless of their underlying architecture or implementation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Architecture Overview */}
          <section className={styles.architectureSection}>
            <div className="container">
              <h2 className={styles.sectionTitle}>Core Architecture</h2>
              <div className="row">
                <div className="col col--6">
                  <div className={styles.architectureCard}>
                    <h3>🔍 Universal Discovery Mesh</h3>
                    <p>Find AI services across protocol boundaries with intelligent discovery mechanisms.</p>
                  </div>
                </div>
                <div className="col col--6">
                  <div className={styles.architectureCard}>
                    <h3>🔄 Protocol Translation Hub</h3>
                    <p>Real-time translation between different AI communication protocols.</p>
                  </div>
                </div>
                <div className="col col--6">
                  <div className={styles.architectureCard}>
                    <h3>📡 Adaptive Router</h3>
                    <p>Intelligent routing based on capabilities, performance, and availability.</p>
                  </div>
                </div>
                <div className="col col--6">
                  <div className={styles.architectureCard}>
                    <h3>🤝 Capability Negotiator</h3>
                    <p>Dynamic capability matching between AI systems with different feature sets.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Started Section */}
          <section className={styles.getStartedSection}>
            <div className="container">
              <div className="row">
                <div className="col col--8 col--offset-2">
                  <h2 className={styles.sectionTitle}>Get Started</h2>
                  <p className={styles.sectionDescription}>
                    UAICP is currently in active development. Join our community to contribute to the specification,
                    implement reference solutions, or provide feedback on the protocol design.
                  </p>
                  <div className={styles.getStartedButtons}>
                    <Link
                      className="button button--primary button--lg"
                      to="/docs/specification/introduction">
                      📖 Read Documentation
                    </Link>
                    <Link
                      className="button button--secondary button--lg"
                      href="https://github.com/UAICP/uaicp_specification/issues">
                      💬 Join Discussion
                    </Link>
                    <Link
                      className="button button--secondary button--lg"
                      to="/docs/examples/use-cases">
                      🛠️ View Examples
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
