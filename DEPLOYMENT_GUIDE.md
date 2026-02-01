# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

#### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., "portfolio" or "my-website")
4. Choose "Public" visibility
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

#### 2. Update Vite Configuration

Open `vite.config.ts` and update the base path:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with YOUR repository name
})
```

For example, if your repo is named "portfolio":
```typescript
base: '/portfolio/',
```

#### 3. Initialize Git and Push to GitHub

Run these commands in your project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace:
- `YOUR-USERNAME` with your GitHub username
- `YOUR-REPO-NAME` with your repository name

#### 4. Enable GitHub Actions

The workflow file (`.github/workflows/deploy.yml`) is already included. GitHub Actions will automatically:
- Run when you push to the main branch
- Build your project
- Deploy to GitHub Pages

#### 5. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click "Save"

Wait a few minutes, and your site will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

---

### Option 2: Manual Deployment with gh-pages

If you prefer manual deployment:

#### 1. Update Vite Configuration

Same as Option 1, Step 2.

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Deploy

```bash
npm run deploy
```

This command will:
- Build your project (`npm run build`)
- Create/update the `gh-pages` branch
- Push the build files to GitHub

#### 4. Configure GitHub Pages

Same as Option 1, Step 5.

---

## Using a Custom Domain (Optional)

### Step 1: Add CNAME File

Create a file named `CNAME` in the `public` folder with your domain:

```
yourdomain.com
```

### Step 2: Configure DNS

Add these records to your domain's DNS settings:

For apex domain (yourdomain.com):
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

For www subdomain:
```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### Step 3: Update GitHub Settings

1. Go to Settings > Pages
2. Enter your custom domain
3. Check "Enforce HTTPS" (after DNS propagates)

---

## Troubleshooting

### Site Shows 404 Error

**Problem**: GitHub Pages is enabled but site shows 404

**Solutions**:
1. Make sure you've updated the `base` in `vite.config.ts`
2. Check that the `gh-pages` branch exists
3. Verify "Source" in GitHub Pages settings is set to `gh-pages` branch
4. Wait 5-10 minutes for deployment to complete

### CSS/JS Not Loading

**Problem**: Site loads but no styling or functionality

**Solution**: You forgot to update `base` in `vite.config.ts`. The base path should match your repository name.

### GitHub Actions Failed

**Problem**: Deployment workflow fails

**Solutions**:
1. Check the Actions tab for error details
2. Make sure `package.json` scripts are correct
3. Verify all dependencies are listed in `package.json`
4. Try running `npm run build` locally to test

### Changes Not Showing

**Problem**: Pushed changes but site hasn't updated

**Solutions**:
1. Check GitHub Actions tab to see if workflow completed
2. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Wait a few minutes for GitHub's CDN to update

---

## Making Updates

After your initial deployment, updating is easy:

```bash
# Make your changes to the code

# Stage your changes
git add .

# Commit your changes
git commit -m "Update portfolio content"

# Push to GitHub
git push

# If using Option 1 (GitHub Actions): 
# Deployment happens automatically!

# If using Option 2 (manual):
npm run deploy
```

---

## Performance Optimization

### Before Deployment:

1. **Optimize Images**: Compress images before adding them
2. **Remove Console Logs**: Clean up any debugging code
3. **Test Build Locally**: Run `npm run build` and `npm run preview`

### Monitoring:

- Check Google PageSpeed Insights
- Monitor with Google Analytics (add tracking code)
- Test on multiple devices and browsers

---

## Security Best Practices

1. Never commit `.env` files with secrets
2. Use environment variables for sensitive data
3. Keep dependencies updated: `npm audit fix`
4. Enable Dependabot in GitHub Settings

---

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Need Help?

- Check GitHub Actions logs for detailed error messages
- Review the README.md for project-specific information
- GitHub Pages typically takes 5-10 minutes to deploy changes

**Your site will be live at**: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

🚀 Happy deploying!
