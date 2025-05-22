# UAICP Official Website

The official website for the Universal AI Communication Protocol (UAICP) - an open specification for AI system interoperability.

🌐 **Live Site**: [https://uaicp.org](https://uaicp.org)

Built with Docusaurus, featuring comprehensive documentation, community features, and GitHub integration.

## Features

- 📖 **Complete Documentation** - Specification, integration guides, and examples
- 🤝 **Community Integration** - GitHub-first contribution workflow
- 🔍 **Live GitHub Data** - Real-time contributor stats and project metrics
- 🌐 **Multi-Protocol Support** - Documentation for all major AI protocols
- 📱 **Responsive Design** - Works on all devices
- 🚀 **Auto-Deploy** - Continuous deployment to GitHub Pages

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000
```

### Building

```bash
# Build for production
npm run build

# Serve built site locally
npm run serve
```

## Project Structure

```
uaicp_website/
├── docs/                          # Documentation pages
│   ├── specification/             # Core UAICP specification
│   ├── integration-guides/        # Platform integration guides
│   ├── examples/                  # Use cases and code examples
│   └── governance/                # Community governance docs
├── blog/                          # Blog posts and announcements
├── src/
│   ├── components/                # React components
│   │   ├── HomepageFeatures/      # Landing page features
│   │   └── CommunityFeatures/     # Community widgets
│   ├── pages/                     # Custom pages
│   │   ├── index.tsx              # Homepage
│   │   └── community.tsx          # Community page
│   └── css/                       # Custom styling
├── static/                        # Static assets
└── .github/workflows/             # CI/CD automation
```

## Content Management

### Documentation

Documentation is organized into several sections:

- **Specification** (`docs/specification/`) - Technical specification and architecture
- **Integration Guides** (`docs/integration-guides/`) - Platform-specific implementation guides
- **Examples** (`docs/examples/`) - Real-world use cases and code samples
- **Governance** (`docs/governance/`) - Community processes and contribution guidelines

### Content Sync

The website automatically syncs content from the specification repository:

- Core specification updates are pulled during build
- Integration guides are synchronized from the main repo
- Examples are updated to reflect the latest patterns

### Blog Posts

Blog posts are written in Markdown with front matter:

```markdown
---
slug: post-slug
title: Post Title
authors: [author-name]
tags: [tag1, tag2]
---

Post content here...
```

## Community Features

### GitHub Integration

- **Live Contributor Data** - Real-time contributor statistics from GitHub API
- **Automatic Welcome Messages** - New contributors receive helpful onboarding
- **Issue Templates** - Structured templates for bug reports and feature requests
- **Pull Request Automation** - Automated checks and community engagement

### Community Widgets

- **GitHub Stats** - Live repository statistics
- **Contributor Showcase** - Featured community members
- **Implementation Gallery** - User-submitted projects
- **Quick Contribution** - Easy ways to get involved

## Deployment

### GitHub Pages (Current)

The site automatically deploys to GitHub Pages:

1. Push to `main` branch triggers build
2. Content is synced from specification repo
3. Site is built with Docusaurus
4. Deployed to `https://uaicp.org`

### Custom Domain

The site is configured for the custom domain `uaicp.org`:

- DNS A records point to GitHub Pages
- HTTPS is automatically enabled
- Redirects are handled properly

## Development Guidelines

### Adding Documentation

1. Create new `.md` files in appropriate `docs/` subdirectory
2. Add front matter with `sidebar_position` and other metadata
3. Update `sidebars.ts` if creating new categories
4. Test locally before submitting PR

### Adding Components

1. Create components in `src/components/`
2. Use TypeScript for all new components
3. Follow existing naming conventions
4. Add proper PropTypes or TypeScript interfaces

### Styling

- Use CSS modules for component-specific styles
- Global styles go in `src/css/custom.css`
- Follow the existing UAICP brand colors and design system
- Ensure responsive design for all screen sizes

## Contributing

### Quick Edits

1. Click "Edit this page" on any documentation page
2. Make changes directly in GitHub
3. Submit pull request
4. Changes auto-deploy after merge

### Local Development

1. Fork the repository
2. Clone your fork locally
3. Create feature branch
4. Make changes and test locally
5. Submit pull request

### Content Guidelines

- Write clear, concise documentation
- Include code examples where appropriate
- Follow the existing tone and style
- Test all code examples before submitting
- Add appropriate front matter to all pages

## Community

- **GitHub Discussions** - Technical questions and feature discussions
- **Discord** - Real-time community chat
- **Slack** - Professional and enterprise discussions
- **Issues** - Bug reports and feature requests

## License

- Website code: MIT License
- Documentation content: Creative Commons Attribution 4.0 International (CC BY 4.0)
- UAICP specification: Creative Commons Attribution 4.0 International (CC BY 4.0)

---

Built with ❤️ by the UAICP community
