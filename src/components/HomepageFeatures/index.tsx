import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Universal Interoperability',
    emoji: '🔗',
    description: (
      <>
        Enable seamless communication between different AI systems and platforms.
        Bridge the gap between proprietary protocols and create a unified ecosystem.
      </>
    ),
  },
  {
    title: 'Open Standard',
    emoji: '📜',
    description: (
      <>
        Community-driven, open-source specification accessible to all developers.
        Transparent governance and collaborative development process.
      </>
    ),
  },
  {
    title: 'Security First',
    emoji: '🛡️',
    description: (
      <>
        Built-in security features and best practices for safe AI communication.
        End-to-end encryption and comprehensive audit trails.
      </>
    ),
  },
  {
    title: 'High Performance',
    emoji: '⚡',
    description: (
      <>
        Optimized for high-performance, low-latency AI system interactions.
        Efficient routing and adaptive load balancing.
      </>
    ),
  },
  {
    title: 'Extensible Architecture',
    emoji: '🔧',
    description: (
      <>
        Modular design allowing for custom extensions and specialized use cases.
        Plugin architecture for protocol adapters and custom capabilities.
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    emoji: '📚',
    description: (
      <>
        Comprehensive documentation with examples and reference implementations.
        Multiple client libraries and integration guides.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureEmoji}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
