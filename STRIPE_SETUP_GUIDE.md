# 💳 Stripe Payment Integration Setup Guide

## 🎯 What You Need to Do

To start accepting real payments and getting money in your bank account, follow these steps:

---

## Step 1: Create a Stripe Account

1. Go to **https://stripe.com**
2. Click **"Start now"** or **"Sign up"**
3. Fill in your details:
   - Email address
   - Full name
   - Country
   - Password
4. Verify your email address

---

## Step 2: Get Your Stripe API Keys

1. Log in to your Stripe Dashboard: **https://dashboard.stripe.com**
2. Click on **"Developers"** in the left sidebar
3. Click on **"API keys"**
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_...` for test mode)
   - **Secret key** (starts with `sk_test_...` for test mode) - Click "Reveal test key"

⚠️ **IMPORTANT**: Keep your Secret key private! Never share it publicly.

---

## Step 3: Add Your Stripe Keys to the Project

1. In your project folder, create a file called `.env.local`
2. Copy this template and replace with your actual keys:

```env
# Stripe API Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE

# Your domain
NEXT_PUBLIC_DOMAIN=https://ecofriendlydropshiping-site-40rme44j5-roanco45-labs-projects.vercel.app
```

3. Save the file

---

## Step 4: Connect Your Bank Account

1. In Stripe Dashboard, click **"Settings"** (gear icon)
2. Click **"Bank accounts and scheduling"**
3. Click **"Add bank account"**
4. Enter your bank details:
   - Bank name
   - Account number
   - Routing number
5. Stripe will make 2 small deposits (like $0.32 and $0.45) to verify your account
6. Check your bank statement in 1-2 days
7. Return to Stripe and enter the deposit amounts to verify

---

## Step 5: Activate Your Account

1. In Stripe Dashboard, click **"Activate your account"**
2. Fill in your business information:
   - Business type (Individual or Company)
   - Business address
   - Tax ID (SSN for individuals, EIN for companies)
   - Phone number
3. Submit the form

---

## Step 6: Deploy to Vercel with Stripe Keys

Once you have your Stripe keys, run these commands:

```bash
# Set environment variables in Vercel
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
# Paste your publishable key when prompted

vercel env add STRIPE_SECRET_KEY
# Paste your secret key when prompted

vercel env add NEXT_PUBLIC_DOMAIN
# Enter: https://ecofriendlydropshiping-site-40rme44j5-roanco45-labs-projects.vercel.app

# Deploy with new environment variables
vercel --prod
```

---

## Step 7: Test the Payment Flow

### Test Mode (Free - No Real Money)

Use these test card numbers:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Requires Authentication**: `4000 0025 0000 3155`

For all test cards:
- **Expiry**: Any future date (e.g., 12/25)
- **CVC**: Any 3 digits (e.g., 123)
- **ZIP**: Any 5 digits (e.g., 12345)

### Go Live (Real Money)

1. In Stripe Dashboard, click **"Activate payments"**
2. Complete all required information
3. Switch from Test mode to Live mode (toggle in top right)
4. Get your **Live API keys** (starts with `pk_live_...` and `sk_live_...`)
5. Update your `.env.local` file with live keys
6. Redeploy to Vercel

---

## 💰 How You Get Paid

1. **Customer pays** → Money goes to your Stripe account
2. **Stripe holds it** for 2-7 days (fraud protection)
3. **Automatic payout** → Money transfers to your bank account

### Payout Schedule

- **Default**: Every 2 days
- **You can change** to daily or weekly in Stripe Dashboard

### Fees

- **2.9% + $0.30** per successful card charge
- Example: $100 sale = You get $96.80

---

## 📊 Track Your Sales

### In Stripe Dashboard

- View all payments: **Payments** tab
- See your balance: **Balance** tab
- Download reports: **Reports** tab

### In Google Analytics (via GTM)

- Purchase events are automatically tracked
- View in Google Analytics under **Conversions**

---

## 🔒 Security Notes

1. **Never commit `.env.local`** to Git (it's already in `.gitignore`)
2. **Never share your Secret key** publicly
3. **Use test keys** for development
4. **Use live keys** only in production

---

## 🆘 Need Help?

- **Stripe Documentation**: https://stripe.com/docs
- **Stripe Support**: https://support.stripe.com
- **Test your integration**: https://stripe.com/docs/testing

---

## ✅ Checklist

- [ ] Created Stripe account
- [ ] Got API keys (test mode)
- [ ] Added keys to `.env.local`
- [ ] Connected bank account
- [ ] Activated Stripe account
- [ ] Deployed to Vercel with environment variables
- [ ] Tested with test card
- [ ] Switched to live mode (when ready)
- [ ] Updated to live API keys
- [ ] Made first real sale! 🎉

---

**Your site is ready to accept payments!** 🚀
