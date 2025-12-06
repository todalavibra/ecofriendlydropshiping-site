# 📊 ROI Tracking & Analytics Setup

## 🎯 What's Already Set Up

Your site is already tracking these events in Google Tag Manager:

### 1. **Add to Cart** 
- Fires when: User clicks "Add to Cart"
- Data sent: Product name, price
- GTM Event: `add_to_cart`

### 2. **Purchase Conversion** ✅
- Fires when: Payment succeeds (success page loads)
- Data sent: Transaction ID, total value, currency
- GTM Event: `purchase`

---

## 💰 How to Track ROI

### Formula:
```
ROI = (Revenue - Ad Spend) / Ad Spend × 100%
```

### Example:
- **Ad Spend**: $100
- **Revenue**: $500
- **ROI**: ($500 - $100) / $100 = 400%

---

## 🔧 Google Ads Conversion Tracking Setup

### Step 1: Get Your Conversion ID

1. Go to **Google Ads**: https://ads.google.com
2. Click **Tools & Settings** (wrench icon)
3. Click **Conversions** under "Measurement"
4. Click **+ New conversion action**
5. Select **Website**
6. Choose **Purchase** as the conversion goal
7. Set up the conversion:
   - **Category**: Purchase
   - **Value**: Use transaction-specific value
   - **Count**: Every conversion
8. Click **Create and Continue**
9. Copy your **Conversion ID** and **Conversion Label**
   - Format: `AW-123456789/AbC-dEfGhIjK`

### Step 2: Update Your Code

1. Open `src/app/success/page.tsx`
2. Find this line (around line 45):
```typescript
send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
```
3. Replace with your actual conversion ID:
```typescript
send_to: 'AW-123456789/AbC-dEfGhIjK',
```
4. Save and redeploy

---

## 📈 View Your ROI in Google Ads

### After Setup:

1. Go to **Google Ads Dashboard**
2. Click **Campaigns**
3. You'll see columns:
   - **Cost**: How much you spent
   - **Conversions**: Number of purchases
   - **Conv. value**: Total revenue
   - **ROI**: Automatically calculated

### Custom Columns:

Add these for better tracking:
- **Cost per conversion**: Cost ÷ Conversions
- **Conversion rate**: Conversions ÷ Clicks × 100%
- **ROAS** (Return on Ad Spend): Conv. value ÷ Cost

---

## 📊 Google Analytics 4 Setup

### Enable E-commerce Tracking:

1. Go to **Google Analytics**: https://analytics.google.com
2. Click **Admin** (gear icon)
3. Under **Property**, click **Data Streams**
4. Click your website stream
5. Scroll to **Enhanced Measurement**
6. Make sure these are enabled:
   - ✅ Page views
   - ✅ Scrolls
   - ✅ Outbound clicks
   - ✅ Site search
   - ✅ Video engagement
   - ✅ File downloads

### View E-commerce Reports:

1. Go to **Reports** → **Monetization**
2. Click **E-commerce purchases**
3. You'll see:
   - Total revenue
   - Transactions
   - Average order value
   - Products sold

---

## 🎯 Facebook Pixel (Optional)

If you're running Facebook ads, add this:

### Step 1: Get Your Pixel ID

1. Go to **Facebook Events Manager**: https://business.facebook.com/events_manager
2. Click **Connect Data Sources** → **Web**
3. Click **Get Started**
4. Name your pixel
5. Copy your **Pixel ID** (e.g., `123456789012345`)

### Step 2: Add to Your Site

1. Open `src/app/layout.tsx`
2. Add this code inside the `<head>` section:

```typescript
<Script id="facebook-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

3. Replace `YOUR_PIXEL_ID` with your actual Pixel ID
4. Add purchase tracking to `src/app/success/page.tsx`:

```typescript
// Add this to the useEffect
if (typeof window !== 'undefined') {
  (window as any).fbq('track', 'Purchase', {
    value: total,
    currency: 'USD',
  });
}
```

---

## 📱 Real-Time Monitoring

### Stripe Dashboard
- **Live view**: See payments as they happen
- **Balance**: Check your current balance
- **Payouts**: See when money hits your bank

### Google Analytics Real-Time
- **Active users**: See who's on your site now
- **Events**: Watch conversions happen live
- **Traffic sources**: See where visitors come from

---

## 💡 Pro Tips

### 1. **Set Up Email Notifications**
- Stripe can email you for every sale
- Settings → Email notifications → Enable "Successful payments"

### 2. **Create a Dashboard**
- Use Google Data Studio (free)
- Connect Stripe + Google Ads + Analytics
- See everything in one place

### 3. **Track Customer Lifetime Value**
- In Stripe, tag repeat customers
- Calculate: Total revenue ÷ Total customers
- Adjust ad spend based on LTV

### 4. **A/B Test Your Ads**
- Run 2-3 different ad variations
- Track which brings best ROI
- Scale the winners

---

## 🎯 Key Metrics to Watch

| Metric | What It Means | Good Target |
|--------|---------------|-------------|
| **Conversion Rate** | % of visitors who buy | 2-5% |
| **Average Order Value** | Average sale amount | $50+ |
| **Cost Per Acquisition** | Cost to get 1 customer | < 30% of AOV |
| **ROI** | Return on investment | 300%+ |
| **ROAS** | Revenue per $1 spent | 4:1 or higher |

---

## ✅ Quick Start Checklist

- [ ] Set up Google Ads conversion tracking
- [ ] Add conversion ID to success page
- [ ] Enable e-commerce in Google Analytics
- [ ] Set up Stripe email notifications
- [ ] Create a tracking spreadsheet
- [ ] Run first test purchase
- [ ] Verify conversion shows in Google Ads
- [ ] Launch first ad campaign
- [ ] Monitor ROI daily
- [ ] Scale profitable campaigns

---

**You're all set to track your ROI!** 📈💰
