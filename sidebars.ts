import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Specification sidebar
  specSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'specification/introduction',
        'specification/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Core Specification',
      items: [
        'specification/specification',
      ],
    },
  ],

  // Integration guides sidebar
  integrationSidebar: [
    {
      type: 'category',
      label: 'Integration Guides',
      items: [
        'integration-guides/overview',
        'integration-guides/mcp-integration',
      ],
    },
  ],

  // Examples sidebar
  examplesSidebar: [
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'examples/use-cases',
      ],
    },
  ],

  // Governance sidebar
  governanceSidebar: [
    {
      type: 'category',
      label: 'Governance',
      items: [
        'governance/overview',
        'governance/contributing',
      ],
    },
  ],
};

export default sidebars;
