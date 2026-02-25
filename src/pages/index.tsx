import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.statusBadge}>v0.1 Draft</div>
        <h1 className="hero__title">UAICP</h1>
        <p className={styles.heroName}>Universal Agent Integrity & Control Protocol</p>
        <p className={styles.heroDescription}>
          Open reliability contract for agentic workflows.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/specification/introduction">
            Read Specification
          </Link>
          <Link className="button button--primary button--lg" to="/docs/integration-guides/overview">
            Integration Guides
          </Link>
          <Link className="button button--secondary button--lg" href="https://github.com/UAICP/uaicp_specification">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const description = 'UAICP is an open reliability contract for agentic workflows with evidence gating, verification, policy control, and auditability.';

  return (
    <>
      <Head>
        <meta name="description" content={description} />
      </Head>
      <Layout title="Reliable Agentic Workflows" description={description}>
        <HomepageHeader />
        <main>
          <HomepageFeatures />

          <section className={styles.aboutSection}>
            <div className="container">
              <div className="row">
                <div className="col col--8 col--offset-2">
                  <h2 className={styles.sectionTitle}>Reliability by Contract</h2>
                  <p className={styles.sectionDescription}>
                    UAICP makes reliability enforceable. Orchestrators must satisfy evidence and verification
                    invariants before delivery, and must fail safe when they cannot.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.getStartedSection}>
            <div className="container">
              <div className="row">
                <div className="col col--8 col--offset-2">
                  <h2 className={styles.sectionTitle}>Get Started</h2>
                  <p className={styles.sectionDescription}>
                    Start with the specification, implement the adapter contract, and validate behavior with
                    conformance checks.
                  </p>
                  <div className={styles.getStartedButtons}>
                    <Link className="button button--primary button--lg" to="/docs/specification">
                      Core Spec
                    </Link>
                    <Link className="button button--secondary button--lg" to="/docs/examples/use-cases">
                      Use Cases
                    </Link>
                    <Link className="button button--secondary button--lg" to="/blog">
                      Project Updates
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
