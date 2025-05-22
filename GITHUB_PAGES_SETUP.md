# GitHub Pages + Custom Domain Setup for uaicp.org

## 🌐 **Complete Setup Guide for UAICP Website**

Your UAICP website can be hosted on GitHub Pages with the custom domain `uaicp.org`. Here's the complete setup process:

## **Step 1: Prepare Your Website Repository**

### **Option A: Static HTML Website**
If you're using static HTML/CSS/JS files:
1. Ensure you have an `index.html` file in the root directory
2. Add a `.nojekyll` file to prevent Jekyll processing
3. Your site structure should look like:
```
uaicp_website/
├── index.html          # Main entry point
├── .nojekyll           # Disable Jekyll
├── css/
├── js/
├── images/
└── CNAME               # Custom domain file (we'll create this)
```

### **Option B: Static Site Generator (Hugo, Jekyll, etc.)**
If you're using a static site generator:
1. Build process should output to a specific directory
2. Configure GitHub Actions to build and deploy
3. We'll use the existing `deploy.yml` workflow

## **Step 2: Enable GitHub Pages**

### **Manual Setup via GitHub Web Interface:**
1. Go to https://github.com/UAICP/uaicp_website/settings/pages
2. Under "Source", select:
   - **Deploy from a branch** if using static files
   - **GitHub Actions** if using a build process
3. Select the branch (usually `main`)
4. Click **Save**

### **GitHub CLI Setup:**
```bash
# Enable GitHub Pages from main branch
gh api repos/UAICP/uaicp_website/pages \\
  --method POST \\
  --field source[branch]=main \\
  --field source[path]=/
```

## **Step 3: Configure Custom Domain (uaicp.org)**

### **3.1: Add CNAME File**
Create a `CNAME` file in your repository root:
```
uaicp.org
```

### **3.2: Configure DNS Records**
You need to configure these DNS records with your domain registrar:

#### **A Records (for apex domain):**
Add these A records for `uaicp.org`:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### **CNAME Record (for www subdomain):**
Add CNAME record: `www.uaicp.org` → `UAICP.github.io`

### **3.3: GitHub Repository Settings**
1. Go to https://github.com/UAICP/uaicp_website/settings/pages
2. In the "Custom domain" field, enter: `uaicp.org`
3. Click **Save**
4. Wait for GitHub to verify the domain (can take up to 24 hours)
5. Once verified, enable **"Enforce HTTPS"**

## **Step 4: Domain Verification (Recommended)**

### **4.1: Verify Domain Ownership**
1. Go to https://github.com/settings/pages (your personal GitHub settings)
2. Click "Add a domain"
3. Enter `uaicp.org`
4. Add the TXT record GitHub provides to your DNS

### **4.2: TXT Record Format:**
```
Name: _github-pages-challenge-UAICP
Value: [GitHub-provided verification code]
```

## **Step 5: Enhanced GitHub Actions Deployment**

If you're using a build process, here's an enhanced deployment workflow:

```yaml
# .github/workflows/deploy-pages.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build website
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'  # Adjust based on your build output directory

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## **Step 6: DNS Configuration Examples**

### **Popular DNS Providers:**

#### **Cloudflare:**
```
Type: A     Name: @           Content: 185.199.108.153
Type: A     Name: @           Content: 185.199.109.153
Type: A     Name: @           Content: 185.199.110.153
Type: A     Name: @           Content: 185.199.111.153
Type: CNAME Name: www         Content: UAICP.github.io
Type: TXT   Name: _github-pages-challenge-UAICP Content: [verification-code]
```

#### **Namecheap:**
```
Type: A Record     Host: @     Value: 185.199.108.153
Type: A Record     Host: @     Value: 185.199.109.153
Type: A Record     Host: @     Value: 185.199.110.153
Type: A Record     Host: @     Value: 185.199.111.153
Type: CNAME Record Host: www   Value: UAICP.github.io
Type: TXT Record   Host: _github-pages-challenge-UAICP Value: [verification-code]
```

#### **GoDaddy:**
```
Type: A     Name: @           Value: 185.199.108.153
Type: A     Name: @           Value: 185.199.109.153
Type: A     Name: @           Value: 185.199.110.153
Type: A     Name: @           Value: 185.199.111.153
Type: CNAME Name: www         Value: UAICP.github.io
Type: TXT   Name: _github-pages-challenge-UAICP Value: [verification-code]
```

## **Step 7: Testing and Verification**

### **DNS Propagation Check:**
```bash
# Check A records
dig uaicp.org

# Check CNAME records
dig www.uaicp.org

# Check from specific DNS server
dig @8.8.8.8 uaicp.org
```

### **Online Tools:**
- https://dnschecker.org - Check DNS propagation globally
- https://www.whatsmydns.net - Verify DNS records worldwide

## **Step 8: Security and Performance**

### **8.1: HTTPS Configuration**
- GitHub automatically provides SSL certificates
- Enable "Enforce HTTPS" in repository settings
- All traffic will be redirected to HTTPS

### **8.2: Performance Optimization**
- Use Cloudflare for CDN (optional)
- Optimize images and assets
- Enable gzip compression (GitHub Pages does this automatically)

### **8.3: SEO Configuration**
Add to your `index.html`:
```html
<head>
  <title>UAICP - Universal AI Communication Protocol</title>
  <meta name="description" content="UAICP specification and documentation">
  <meta property="og:title" content="UAICP - Universal AI Communication Protocol">
  <meta property="og:description" content="Open specification for AI system communication">
  <meta property="og:url" content="https://uaicp.org">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://uaicp.org">
</head>
```

## **Step 9: Monitoring and Analytics**

### **9.1: Google Analytics** (Optional)
Add Google Analytics tracking code to monitor traffic.

### **9.2: GitHub Pages Analytics**
Monitor via GitHub Insights and Actions logs.

## **Timeline Expectations**

- **DNS Propagation**: 1-48 hours (usually 1-2 hours)
- **SSL Certificate**: 1-24 hours after DNS is configured
- **GitHub Pages Build**: 1-10 minutes per deployment

## **Troubleshooting**

### **Common Issues:**
1. **"Domain not verified"**: Check DNS propagation and wait
2. **SSL certificate not available**: Ensure DNS is properly configured
3. **404 errors**: Check file paths and repository structure
4. **Build failures**: Check GitHub Actions logs

### **Support Resources:**
- GitHub Pages Documentation: https://docs.github.com/en/pages
- DNS Checker: https://dnschecker.org
- GitHub Community: https://github.community

## **Quick Start Checklist**

- [ ] Create `index.html` in repository root
- [ ] Add `CNAME` file with `uaicp.org`
- [ ] Configure DNS A records for apex domain
- [ ] Add CNAME record for www subdomain
- [ ] Enable GitHub Pages in repository settings
- [ ] Add custom domain in GitHub Pages settings
- [ ] Verify domain ownership (recommended)
- [ ] Enable HTTPS enforcement
- [ ] Test both `uaicp.org` and `www.uaicp.org`

Once configured, your website will be available at:
- **Primary**: https://uaicp.org
- **Alternative**: https://www.uaicp.org
- **GitHub fallback**: https://uaicp.github.io/uaicp_website

This setup provides a professional, secure, and reliable hosting solution for the UAICP website! 🚀
