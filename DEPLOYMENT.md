# 🚀 Deployment Guide for EcoDrop

## Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `ecofriendlydropshipping-site`
3. Description: "Eco-friendly dropshipping e-commerce site built with Next.js"
4. **Keep it PUBLIC** (required for free Vercel hosting)
5. **DO NOT** check "Initialize with README" (we already have code)
6. Click **Create repository**

## Step 2: Push Code to GitHub

Open a new terminal in the project folder and run these commands:

```bash
# Add GitHub as remote (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ecofriendlydropshipping-site.git

# Rename branch to main
git branch -M main

# Push code to GitHub
git push -u origin main
```

**Example:**
If your GitHub username is `todalavibra`, the command would be:
```bash
git remote add origin https://github.com/todalavibra/ecofriendlydropshipping-site.git
```

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Website (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your `ecofriendlydropshipping-site` repository
5. Vercel will auto-detect Next.js settings:
   - **Framework Preset:** Next.js ✓
   - **Root Directory:** `./` ✓
   - **Build Command:** `npm run build` ✓
   - **Output Directory:** `.next` ✓
6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment to complete

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel --prod
```

## Step 4: Get Your Live URL

After deployment, Vercel will give you a URL like:
- `https://ecofriendlydropshipping-site.vercel.app`

You can also add a custom domain in Vercel settings!

## Step 5: Update Google Ads Campaign

1. Go to your Google Ads dashboard
2. Navigate to your campaign settings
3. Update the **Final URL** to your new Vercel domain
4. Save changes

## Step 6: Test Your Live Site

Visit your Vercel URL and test:
- ✓ Homepage loads
- ✓ Products are clickable
- ✓ Add to cart works
- ✓ Cart sidebar opens
- ✓ Checkout flow works
- ✓ GTM tracking fires (check browser console)

## Troubleshooting

### If `git push` fails with "remote already exists":
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/ecofriendlydropshipping-site.git
git push -u origin main
```

### If you get authentication errors:
- Make sure you're logged into GitHub
- You may need to use a Personal Access Token instead of password
- Generate one at: https://github.com/settings/tokens

## Next Steps After Deployment

1. **Set up custom domain** (optional)
   - Go to Vercel project settings → Domains
   - Add `ecofriendlydropshipping.com`
   - Follow DNS configuration instructions

2. **Monitor analytics**
   - Check Google Tag Manager for events
   - Monitor conversion tracking in Google Ads

3. **Optimize for conversions**
   - A/B test different headlines
   - Add more product photos
   - Collect customer emails

---

**Need help?** Check the deployment status at your Vercel dashboard or review build logs if something goes wrong.
