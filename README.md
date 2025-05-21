# UAICP Official Website

This repository contains the source code for the official Universal AI Communication Protocol (UAICP) website at [https://uaicp.org](https://uaicp.org).

## Repository Overview

This repository contains the website and documentation portal for UAICP. For the technical specification and reference implementations, visit [uaicp/uaicp_specification](https://github.com/uaicp/uaicp_specification).

## UAICP Project Repositories

- **[uaicp/uaicp_specification](https://github.com/uaicp/uaicp_specification)** - Technical specification and reference implementations
- **[uaicp/uaicp_website](https://github.com/uaicp/uaicp_website)** (this repository) - Official website and documentation portal
- **Website**: [https://uaicp.org](https://uaicp.org)

## Development

This website is built using [Next.js](https://nextjs.org/) and deployed on [Vercel](https://vercel.com/).

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

```bash
# Clone the repository
git clone https://github.com/uaicp/uaicp_website.git
cd uaicp_website

# Install dependencies
npm install

# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Website pages
│   ├── styles/             # CSS and styling
│   └── lib/                # Utility functions
├── public/                 # Static assets
├── content/                # Markdown content
│   ├── docs/               # Documentation pages
│   ├── blog/               # Blog posts
│   └── examples/           # Example implementations
└── scripts/                # Build and deployment scripts
```

## Contributing

We welcome contributions to improve the website! This includes:

- Fixing bugs and improving user experience
- Adding new documentation and examples
- Improving design and accessibility
- Writing blog posts about UAICP implementations

### Contribution Process

1. Fork this repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test your changes locally
5. Commit your changes: `git commit -m "Add your feature"`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Open a pull request

### Guidelines

- Follow the existing code style and conventions
- Test your changes on different screen sizes
- Ensure accessibility standards are met
- Update documentation as needed

For technical specification contributions, please visit [uaicp/uaicp_specification](https://github.com/uaicp/uaicp_specification).

## Content Management

The website content is managed through:

- **Static pages**: Located in `src/pages/`
- **Documentation**: Markdown files in `content/docs/`
- **Blog posts**: Markdown files in `content/blog/`
- **Examples**: Code examples in `content/examples/`

Some content is automatically synchronized from the specification repository to ensure consistency between the technical specification and the website documentation.

## Deployment

The website is automatically deployed to production when changes are pushed to the `main` branch. Preview deployments are created for pull requests.

- **Production**: [https://uaicp.org](https://uaicp.org)
- **Staging**: Automatic preview URLs for pull requests

## Community

- **GitHub Organization**: [https://github.com/uaicp](https://github.com/uaicp)
- **GitHub Issues**: [Issues](https://github.com/uaicp/uaicp_website/issues) for website-related issues
- **Community Forum**: https://community.uaicp.org
- **Slack Workspace**: https://uaicp.slack.com
- **Mailing List**: announcements@uaicp.org

## License

This website is licensed under the [MIT License](LICENSE). Content is licensed under [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).