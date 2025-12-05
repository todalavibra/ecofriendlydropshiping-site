# 🚀 Vercel GitHub Integration Setup Guide

## Current Status
- ✅ Build fixed and working
- ⚠️ Currently linked to `roanco45-lab` account
- 🎯 Need to link to `todalavibra` GitHub account
- 🌐 Target domain: `https://ecofriendlydropshipping.com/`

---

## Step 1: Unlink Current Vercel Project

First, we need to remove the current Vercel configuration:

```bash
# Remove the current Vercel link
Remove-Item -Recurse -Force .vercel
```

---

## Step 2: Login to Vercel with Correct Account

You have two options:

### Option A: Switch Vercel Account (if you have access to todalavibra)
```bash
# Logout from current account
vercel logout

# Login with the todalavibra account
vercel login
# Follow the prompts to authenticate with the todalavibra account
```

### Option B: Keep Current Account but Link to todalavibra GitHub Repo
If you're deploying from `roanco45-lab` Vercel account but want to use the `todalavibra` GitHub repository, you can:
1. Import the repository from GitHub in Vercel dashboard
2. Grant Vercel access to the `todalavibra` organization on GitHub

---

## Step 3: Verify GitHub Repository Access

Before linking, ensure the repository exists and you have access:

1. Visit: `https://github.com/todalavibra/ecofriendlydropshiping-site`
2. Verify you can see the repository
3. If it's a 404, you may need to:
   - Create the repository on GitHub under `todalavibra` account
   - Or push your local code to create it

---

## Step 4: Push Code to GitHub (if needed)

If the repository doesn't exist yet on GitHub:

```bash
# Check current remote
git remote -v

# If remote is correct, push
git add .
git commit -m "fix: Convert jest.config to JS to fix build error"
git push origin master

# If remote needs updating
git remote set-url origin https://github.com/todalavibra/ecofriendlydropshiping-site.git
git push -u origin master
```

---

## Step 5: Link Vercel Project to GitHub Repository

### Method A: Using Vercel CLI
```bash
# Link the project
vercel link

# When prompted:
# - Select or create a Vercel project
# - Choose to link to existing project or create new one
# - Confirm the project name: ecofriendlydropshiping-site
```

### Method B: Using Vercel Dashboard (Recommended)
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. If you don't see `todalavibra` organization:
   - Click "Adjust GitHub App Permissions"
   - Grant access to the `todalavibra` organization
5. Select `todalavibra/ecofriendlydropshiping-site`
6. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

---

## Step 6: Configure Environment Variables

In the Vercel dashboard, add these environment variables:

```env
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_GTM_ID=your_google_tag_manager_id
```

**How to add:**
1. Go to Project Settings → Environment Variables
2. Add each variable for all environments (Production, Preview, Development)

---

## Step 7: Configure Custom Domain

### In Vercel Dashboard:
1. Go to your project → Settings → Domains
2. Add domain: `ecofriendlydropshipping.com`
3. Add domain: `www.ecofriendlydropshipping.com` (optional)

### DNS Configuration:
You'll need to update your domain's DNS settings:

**For apex domain (ecofriendlydropshipping.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP)

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Or use Vercel nameservers (recommended):**
1. In Vercel, go to Domains → Use Vercel DNS
2. Update your domain registrar to use Vercel's nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

---

## Step 8: Deploy

### Automatic Deployment (Recommended):
Once linked to GitHub, Vercel will automatically deploy on every push to `master` branch.

### Manual Deployment:
```bash
# Deploy to production
vercel --prod

# Or deploy to preview
vercel
```

---

## Step 9: Verify Deployment

After deployment:
1. Check the deployment URL in Vercel dashboard
2. Verify the site loads correctly
3. Test all pages:
   - Home page
   - About page
   - Product pages
   - Checkout flow
4. Verify custom domain is working: `https://ecofriendlydropshipping.com/`

---

## Troubleshooting

### Issue: GitHub Repository 404
**Solution**: 
- Create the repository on GitHub first
- Or verify you have access to the `todalavibra` organization

### Issue: Vercel Can't Access GitHub Repo
**Solution**:
- Go to GitHub Settings → Applications → Vercel
- Grant access to the `todalavibra` organization

### Issue: Build Fails on Vercel
**Solution**:
- Check build logs in Vercel dashboard
- Ensure environment variables are set
- Verify `package.json` scripts are correct

### Issue: Domain Not Working
**Solution**:
- DNS changes can take up to 48 hours to propagate
- Use `nslookup ecofriendlydropshipping.com` to check DNS
- Verify SSL certificate is issued (automatic in Vercel)

---

## Quick Command Reference

```bash
# Check Vercel login status
vercel whoami

# Logout
vercel logout

# Login
vercel login

# Link project
vercel link

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View project info
vercel inspect
```

---

## Next Steps After Setup

1. ✅ Verify build passes
2. ✅ Push code to GitHub
3. ✅ Link Vercel to GitHub repository
4. ✅ Configure environment variables
5. ✅ Set up custom domain
6. ✅ Deploy to production
7. ✅ Test live site

---

## Important Notes

- The `.vercel` folder should NOT be committed to Git (already in `.gitignore`)
- Always test deployments in preview before pushing to production
- Monitor deployment logs for any errors
- Set up Vercel notifications for deployment status

---

**Ready to proceed? Let me know which method you'd like to use!**
