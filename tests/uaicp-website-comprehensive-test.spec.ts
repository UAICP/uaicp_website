import { test, expect } from '@playwright/test';

test.describe('UAICP Website Comprehensive Test Suite', () => {
  
  test('Homepage loads correctly with all main elements', async ({ page }) => {
    // Navigate to homepage
    await page.goto('https://uaicp.org/');
    
    // Verify page title
    await expect(page).toHaveTitle(/UAICP - Universal AI Communication Protocol/);
    
    // Verify main heading
    await expect(page.getByRole('heading', { name: 'UAICP - Universal AI Communication Protocol', level: 1 })).toBeVisible();
    
    // Verify hero section content
    await expect(page.getByText('Open specification for universal AI system communication and interoperability')).toBeVisible();
    await expect(page.getByText('✨ In Development')).toBeVisible();
    
    // Verify feature cards are present
    await expect(page.getByText('Universal Interoperability')).toBeVisible();
    await expect(page.getByText('Open Standard')).toBeVisible();
    await expect(page.getByText('Security First')).toBeVisible();
    await expect(page.getByText('High Performance')).toBeVisible();
    await expect(page.getByText('Extensible Architecture')).toBeVisible();
    await expect(page.getByText('Developer Friendly')).toBeVisible();
    
    // Verify core sections
    await expect(page.getByRole('heading', { name: 'What is UAICP?', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Core Architecture', level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Get Started', level: 2 })).toBeVisible();
  });

  test('Navigation menu works correctly', async ({ page }) => {
    await page.goto('https://uaicp.org/');
    
    // Verify all main navigation links are present
    await expect(page.getByRole('link', { name: 'Specification' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Integration' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Examples' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();
    
    // Verify utility navigation
    await expect(page.getByRole('link', { name: 'v1.0.0 (Draft)' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'GitHub' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Switch between dark and light mode/ })).toBeVisible();
  });

  test('Specification section navigation and content', async ({ page }) => {
    await page.goto('https://uaicp.org/');
    
    // Click Specification link
    await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Specification' }).click();
    
    // Verify we're on the specification page
    await expect(page).toHaveURL('https://uaicp.org/docs/specification/introduction');
    await expect(page).toHaveTitle('Introduction to UAICP | UAICP - Universal AI Communication Protocol');
    
    // Verify main content
    await expect(page.getByRole('heading', { name: 'Introduction to UAICP', level: 1 })).toBeVisible();
    await expect(page.getByText('Welcome to the Universal AI Communication Protocol (UAICP) documentation')).toBeVisible();
    
    // Verify sidebar navigation
    await expect(page.getByText('Getting Started')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Introduction to UAICP' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Quick Start Guide' })).toBeVisible();
    
    // Verify table of contents
    await expect(page.getByRole('link', { name: 'What is UAICP?' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Key Benefits' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Design Principles' })).toBeVisible();
  });

  test('Integration Guides section navigation and content', async ({ page }) => {
    await page.goto('https://uaicp.org/');
    
    // Click Integration link
    await page.getByRole('link', { name: 'Integration', exact: true }).click();
    
    // Verify we're on the integration page
    await expect(page).toHaveURL('https://uaicp.org/docs/integration-guides/overview');
    await expect(page).toHaveTitle('Integration Overview | UAICP - Universal AI Communication Protocol');
    
    // Verify main content
    await expect(page.getByRole('heading', { name: 'Integration Overview', level: 1 })).toBeVisible();
    await expect(page.getByText('UAICP is designed to integrate seamlessly with existing AI protocol ecosystems')).toBeVisible();
    
    // Verify integration philosophy section
    await expect(page.getByText('non-invasive integration')).toBeVisible();
    await expect(page.getByText('✅ Enhance, don\'t replace')).toBeVisible();
    
    // Verify supported protocols table
    await expect(page.getByText('MCP (Anthropic)')).toBeVisible();
    await expect(page.getByText('OpenAI API')).toBeVisible();
    await expect(page.getByText('Google A2A')).toBeVisible();
    
    // Verify integration patterns
    await expect(page.getByText('Translation Layer Pattern')).toBeVisible();
    await expect(page.getByText('Bridge Pattern')).toBeVisible();
    await expect(page.getByText('Discovery Enhancement Pattern')).toBeVisible();
  });

  test('Examples section navigation and content', async ({ page }) => {
    await page.goto('https://uaicp.org/');
    
    // Click Examples link
    await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Examples' }).click();
    
    // Verify we're on the examples page
    await expect(page).toHaveURL('https://uaicp.org/docs/examples/use-cases');
    await expect(page).toHaveTitle('UAICP Use Cases & Examples | UAICP - Universal AI Communication Protocol');
    
    // Verify main content
    await expect(page.getByRole('heading', { name: 'UAICP Use Cases & Examples', level: 1 })).toBeVisible();
    await expect(page.getByText('Real-world scenarios demonstrating how UAICP enables AI interoperability')).toBeVisible();
    
    // Verify key use case sections
    await expect(page.getByText('🔍 Cross-Protocol AI Service Discovery')).toBeVisible();
    await expect(page.getByText('🌉 Protocol Translation for Legacy Systems')).toBeVisible();
    await expect(page.getByText('🔄 Multi-Protocol AI Workflows')).toBeVisible();
    await expect(page.getByText('🛡️ High-Availability AI Systems')).toBeVisible();
    
    // Verify specific examples
    await expect(page.getByText('Financial Document Analysis Platform')).toBeVisible();
    await expect(page.getByText('Healthcare Research Discovery')).toBeVisible();
    await expect(page.getByText('Manufacturing Quality Control Migration')).toBeVisible();
    
    // Verify code examples are present
    await expect(page.locator('code').first()).toBeVisible();
  });

  test('Blog section navigation and content', async ({ page }) => {
    await page.goto('https://uaicp.org/');
    
    // Click Blog link
    await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Blog' }).click();
    
    // Verify we're on the blog page
    await expect(page).toHaveURL('https://uaicp.org/blog');
    await expect(page).toHaveTitle('Blog | UAICP - Universal AI Communication Protocol');
    
    // Verify blog content
    await expect(page.getByText('Introducing UAICP - Universal AI Communication Protocol')).toBeVisible();
    await expect(page.getByText('January 20, 2025')).toBeVisible();
    await expect(page.getByText('6 min read')).toBeVisible();
    
    // Verify blog post preview content
    await expect(page.getByText('The AI ecosystem is experiencing unprecedented growth')).toBeVisible();
    await expect(page.getByText('fragmentation')).toBeVisible();
    
    // Verify tags
    await expect(page.getByRole('link', { name: 'uaicp' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'ai' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'interoperability' })).toBeVisible();
  });

  test('Community section navigation and content', async ({ page }) => {
    await page.goto('https://uaicp.org/');
    
    // Click Community link
    await page.getByRole('link', { name: 'Community', exact: true }).click();
    
    // Verify we're on the community page
    await expect(page).toHaveURL('https://uaicp.org/community');
    await expect(page).toHaveTitle('Community | UAICP - Universal AI Communication Protocol');
    
    // Verify main content
    await expect(page.getByRole('heading', { name: 'UAICP Community', level: 1 })).toBeVisible();
    await expect(page.getByText('Join developers, researchers, and organizations building the future of AI interoperability')).toBeVisible();
    
    // Verify community stats
    await expect(page.getByText('GitHub Stars')).toBeVisible();
    await expect(page.getByText('Contributors')).toBeVisible();
    await expect(page.getByText('Open Issues')).toBeVisible();
    
    // Verify getting started section
    await expect(page.getByText('🚀 Getting Started')).toBeVisible();
    await expect(page.getByText('📝 Fix Documentation')).toBeVisible();
    await expect(page.getByText('🐛 Report Issues')).toBeVisible();
    await expect(page.getByText('💬 Join Discussion')).toBeVisible();
    
    // Verify community implementations
    await expect(page.getByText('UAICP Python Client')).toBeVisible();
    await expect(page.getByText('UAICP JavaScript SDK')).toBeVisible();
    await expect(page.getByText('MCP-UAICP Bridge')).toBeVisible();
  });

  test('Main CTA buttons work correctly', async ({ page }) => {
    await page.goto('https://uaicp.org/');
    
    // Test "View Specification" CTA
    await page.getByRole('link', { name: '📋 View Specification' }).click();
    await expect(page).toHaveURL('https://uaicp.org/docs/specification/introduction');
    
    // Go back to homepage
    await page.goto('https://uaicp.org/');
    
    // Test "Integration Guides" CTA
    await page.getByRole('link', { name: '🚀 Integration Guides' }).click();
    await expect(page).toHaveURL('https://uaicp.org/docs/integration-guides/overview');
    
    // Go back to homepage
    await page.goto('https://uaicp.org/');
    
    // Test "GitHub Organization" CTA
    const newTabPromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '💻 GitHub Organization' }).click();
    const newTab = await newTabPromise;
    await expect(newTab).toHaveURL(/github\.com\/UAICP/);
    await newTab.close();
  });

  test('Footer links work correctly', async ({ page }) => {
    await page.goto('https://uaicp.org/');
    
    // Test Documentation section
    await page.getByRole('contentinfo').getByRole('link', { name: 'Specification' }).click();
    await expect(page).toHaveURL('https://uaicp.org/docs/specification/introduction');
    
    // Go back and test another footer link
    await page.goto('https://uaicp.org/');
    await page.getByRole('contentinfo').getByRole('link', { name: 'Contributing' }).click();
    await expect(page).toHaveURL('https://uaicp.org/docs/governance/contributing');
    await expect(page.getByRole('heading', { name: 'Contributing to UAICP', level: 1 })).toBeVisible();
    
    // Test external links in footer
    await page.goto('https://uaicp.org/');
    const githubLinkPromise = page.waitForEvent('popup');
    await page.getByRole('contentinfo').getByRole('link', { name: 'GitHub Organization' }).click();
    const githubTab = await githubLinkPromise;
    await expect(githubTab).toHaveURL(/github\.com\/UAICP/);
    await githubTab.close();
  });

  test('GitHub links work correctly', async ({ page }) => {
    await page.goto('https://uaicp.org/');
    
    // Test main GitHub link in navigation
    const githubTabPromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'GitHub', exact: true }).click();
    const githubTab = await githubTabPromise;
    await expect(githubTab).toHaveURL('https://github.com/UAICP/uaicp_specification');
    await githubTab.close();
  });

  test('Dark/light mode toggle works', async ({ page }) => {
    await page.goto('https://uaicp.org/');
    
    // Verify initial state (light mode)
    const themeToggle = page.getByRole('button', { name: /Switch between dark and light mode/ });
    await expect(themeToggle).toContainText('currently light mode');
    
    // Click to switch to dark mode
    await themeToggle.click();
    
    // Verify dark mode is activated
    await expect(themeToggle).toContainText('currently dark mode');
    await expect(themeToggle).toHaveAttribute('aria-pressed', 'true');
    
    // Click again to switch back to light mode
    await themeToggle.click();
    
    // Verify light mode is restored
    await expect(themeToggle).toContainText('currently light mode');
    await expect(themeToggle).not.toHaveAttribute('aria-pressed', 'true');
  });

  test('Version selector is present and functional', async ({ page }) => {
    await page.goto('https://uaicp.org/');
    
    // Verify version selector is present
    const versionSelector = page.getByRole('link', { name: 'v1.0.0 (Draft)' });
    await expect(versionSelector).toBeVisible();
    
    // Click version selector (should navigate to current docs)
    await versionSelector.click();
    await expect(page).toHaveURL(/\/docs\//);
  });

  test('Edit page functionality', async ({ page }) => {
    // Navigate to a documentation page
    await page.goto('https://uaicp.org/docs/specification/introduction');
    
    // Verify "Edit this page" link is present
    const editLink = page.getByRole('link', { name: 'Edit this page ↗' });
    await expect(editLink).toBeVisible();
    
    // Verify it points to GitHub
    await expect(editLink).toHaveAttribute('href', /github\.com.*\/edit\//);
  });

  test('Search functionality and navigation elements', async ({ page }) => {
    await page.goto('https://uaicp.org/docs/specification/introduction');
    
    // Verify breadcrumb navigation
    await expect(page.getByRole('navigation', { name: 'Breadcrumbs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home page' })).toBeVisible();
    
    // Verify table of contents
    await expect(page.getByRole('link', { name: 'What is UAICP?' })).toBeVisible();
    
    // Verify next/previous navigation
    await expect(page.locator('text=Next Quick Start Guide »')).toBeVisible();
  });

  test('Mobile responsiveness check', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('https://uaicp.org/');
    
    // Verify page loads and main content is visible
    await expect(page.getByRole('heading', { name: 'UAICP - Universal AI Communication Protocol', level: 1 })).toBeVisible();
    await expect(page.getByText('Open specification for universal AI system communication')).toBeVisible();
    
    // Verify navigation is accessible
    await expect(page.getByRole('link', { name: 'UAICP Logo UAICP' })).toBeVisible();
  });

  test('Documentation sidebar navigation', async ({ page }) => {
    await page.goto('https://uaicp.org/docs/specification/introduction');
    
    // Verify sidebar is present
    await expect(page.getByRole('navigation', { name: 'Docs sidebar' })).toBeVisible();
    
    // Verify expandable sections
    await expect(page.getByRole('button', { name: 'Getting Started' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Core Specification' })).toBeVisible();
    
    // Verify current page is highlighted
    await expect(page.getByRole('link', { name: 'Introduction to UAICP' })).toBeVisible();
  });

  test('Code examples and copy functionality', async ({ page }) => {
    await page.goto('https://uaicp.org/docs/examples/use-cases');
    
    // Verify code blocks are present
    await expect(page.locator('code').first()).toBeVisible();
    
    // Verify copy buttons are present
    await expect(page.getByRole('button', { name: 'Copy code to clipboard' }).first()).toBeVisible();
  });

  test('External links open in new tabs', async ({ page }) => {
    await page.goto('https://uaicp.org/community');
    
    // Test GitHub link opens in new tab
    const newTabPromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Specification ↗' }).first().click();
    const newTab = await newTabPromise;
    await expect(newTab).toHaveURL(/github\.com/);
    await newTab.close();
  });

  test('Page metadata and SEO elements', async ({ page }) => {
    await page.goto('https://uaicp.org/');
    
    // Verify title
    await expect(page).toHaveTitle(/UAICP - Universal AI Communication Protocol/);
    
    // Verify meta description exists
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveCount(1);
    
    // Test another page
    await page.goto('https://uaicp.org/docs/specification/introduction');
    await expect(page).toHaveTitle('Introduction to UAICP | UAICP - Universal AI Communication Protocol');
  });

});
