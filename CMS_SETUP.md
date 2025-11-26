# Decap CMS Setup Guide

## 🚀 Quick Start (Local Development)

### 1. Install dependencies
```bash
cd alkosto-help-center
npm install
```

### 2. Start with CMS
```bash
npm run start:cms
```

This runs both:
- Docusaurus dev server at `http://localhost:3000`
- Decap CMS proxy server at `http://localhost:8081`

### 3. Access the CMS
Go to: **http://localhost:3000/admin/**

You can now create, edit, and delete articles directly in your browser!

---

## 🌐 Production Setup (AWS/Azure)

For production, you need to set up GitHub OAuth authentication:

### Step 1: Create a GitHub OAuth App

1. Go to GitHub → Settings → Developer settings → OAuth Apps → New OAuth App
2. Fill in:
   - **Application name**: Alkosto Help Center CMS
   - **Homepage URL**: `https://your-domain.com`
   - **Authorization callback URL**: `https://your-auth-server.com/callback`
3. Save the **Client ID** and **Client Secret**

### Step 2: Deploy an OAuth Server

You need a small server to handle GitHub OAuth. Options:

#### Option A: Use a serverless function (recommended)

**AWS Lambda + API Gateway:**
- Deploy [netlify-cms-oauth-provider-node](https://github.com/vencax/netlify-cms-github-oauth-provider) as a Lambda

**Azure Functions:**
- Similar deployment using Azure Functions

#### Option B: Use an external service

- [Heroku OAuth Server](https://github.com/vencax/netlify-cms-github-oauth-provider)
- One-click deploy to Heroku

### Step 3: Update config.yml

Edit `static/admin/config.yml`:

```yaml
backend:
  name: github
  repo: your-username/your-repo
  branch: main
  base_url: https://your-oauth-server.com  # Your OAuth server URL

# Remove or comment out local_backend for production
# local_backend: true
```

### Step 4: Set up auto-deployment

When content is edited via CMS, it creates a commit in GitHub. Set up CI/CD:

**GitHub Actions** (recommended):
```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: cd alkosto-help-center && npm ci && npm run build
      - name: Deploy to S3/Azure
        # Add your deployment steps here
```

---

## 📁 File Structure

```
static/admin/
├── index.html      # CMS entry point
└── config.yml      # CMS configuration
```

---

## 🔧 CMS Features

- **Visual Markdown Editor** - WYSIWYG editing
- **Image Upload** - Drag & drop images
- **Draft/Publish Workflow** - Optional editorial workflow
- **Multi-language** - Spanish UI configured

---

## ⚠️ Important Notes

1. **Local Development**: Uses `local_backend: true` - no auth needed
2. **Production**: Requires GitHub OAuth setup
3. **Media Files**: Uploaded to `static/img/uploads/`
4. **Content Changes**: Saved directly to Git repository

---

## 🆘 Troubleshooting

### CMS won't load
- Make sure both servers are running (`npm run start:cms`)
- Check browser console for errors

### Can't save changes
- Verify the `decap-server` is running on port 8081
- Check that you're in the project's Git repository

### Images not showing
- Ensure `static/img/uploads/` folder exists
- Check image paths in the markdown

---

## 📚 Resources

- [Decap CMS Docs](https://decapcms.org/docs/)
- [Docusaurus Docs](https://docusaurus.io/docs)
- [GitHub OAuth Setup](https://docs.github.com/en/developers/apps/building-oauth-apps)
