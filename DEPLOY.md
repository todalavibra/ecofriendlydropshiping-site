# Deployment Guide

## Step 1: Push to GitHub
Since you haven't connected a remote repository yet, follow these steps:

1.  Log in to [GitHub](https://github.com).
2.  Click the **+** icon in the top right and select **New repository**.
3.  Name it `ecofriendlydropshipping-site`.
4.  **Important:** Do NOT check "Initialize with README", "Add .gitignore", or "Choose a license". Keep it empty.
5.  Click **Create repository**.
6.  Copy the URL (e.g., `https://github.com/YOUR_USERNAME/ecofriendlydropshipping-site.git`).
7.  Run the following commands in your terminal (replace the URL with yours):

```bash
git remote add origin https://github.com/YOUR_USERNAME/ecofriendlydropshipping-site.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel
1.  Go to [Vercel.com](https://vercel.com) and log in (you can use your GitHub account).
2.  Click **Add New...** -> **Project**.
3.  You should see your `ecofriendlydropshipping-site` repository in the list. Click **Import**.
4.  **Configure Project:**
    *   **Framework Preset:** Next.js (should be auto-detected).
    *   **Root Directory:** `./` (default).
    *   **Environment Variables:** (None needed for now).
5.  Click **Deploy**.

## Step 3: Google Ads
Once deployed, Vercel will give you a domain like `ecofriendlydropshipping-site.vercel.app`.
1.  Copy this URL.
2.  Go to your Google Ads Campaign settings.
3.  Update the **Final URL** to your new Vercel domain.
4.  Verify that your Conversion Action is set up to track the "Add to Cart" button clicks (using the GTM ID we added).
