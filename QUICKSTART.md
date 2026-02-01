# Quick Start Guide 🚀

Get your portfolio live in 10 minutes!

## Step 1: Download & Extract (You're here!)

You already have the files! Extract the portfolio folder.

## Step 2: Install Dependencies

Open your terminal in the portfolio folder and run:

```bash
npm install
```

## Step 3: Test Locally

```bash
npm run dev
```

Open http://localhost:5173 to see your portfolio!

## Step 4: Customize Your Content

Edit `src/App.tsx` to update:

- ✏️ Your name (line 120: change "Satwik")
- 📧 Email address (line 282: change "satwik@gmail.com")
- 💼 LinkedIn URL (line 287)
- 💻 GitHub URL (line 292)
- 🎨 Skills (line 170)
- 📁 Projects (line 192-212)

## Step 5: Deploy to GitHub

### First-time setup:

1. Create a new repository on GitHub (e.g., "portfolio")

2. Update `vite.config.ts` - change line 6:
   ```typescript
   base: '/portfolio/', // Use YOUR repo name!
   ```

3. Run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```

4. Enable GitHub Pages:
   - Go to repo Settings → Pages
   - Source: gh-pages branch
   - Save

5. Wait 2-5 minutes, your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
   ```

### Future updates:

Just run:
```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions will automatically deploy! ✨

## Troubleshooting

**Site shows 404?**
- Did you update `base` in `vite.config.ts`?
- Is gh-pages branch selected in Settings → Pages?

**No styling?**
- Clear browser cache (Ctrl+Shift+R)
- Check `base` path in `vite.config.ts`

**More help?** Check:
- `DEPLOYMENT_GUIDE.md` - Detailed instructions
- `README.md` - Full documentation

---

## Need More Help?

The portfolio includes:
- ✅ Cosmic space theme with animations
- ✅ Fully responsive design
- ✅ Optimized for performance
- ✅ GitHub Actions auto-deployment
- ✅ TypeScript support

You're all set! Go make it yours! 🎨
