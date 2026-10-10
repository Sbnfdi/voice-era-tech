# Hostinger Deployment Runbook — Voice Era Tech LLC

This guide provides end-to-end instructions for deploying Voice Era Tech on **Hostinger Web Hosting (hPanel Node.js)** or **Hostinger VPS (Ubuntu)**.

---

## Architecture Summary
- **Framework:** Next.js 16 (App Router) with Standalone server support.
- **Node.js Requirement:** Node.js 18.x, 20.x, or 22.x LTS.
- **Database:**
  - **Local SQLite (Zero-Config Default):** Stored automatically in `data/voice_era_tech.db` with safe directory fallbacks.
  - **Turso Cloud SQLite (Optional):** Configured via `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN`.
- **Startup Script:** [server.js](file:///g:/voice-era-tech/server.js) (custom Next.js HTTP server optimized for Hostinger Passenger & PM2).

---

## Method 1: Hostinger Web Hosting / Cloud (hPanel Node.js Selector)

Use this method if you are using Hostinger Business, Cloud Hosting, or any plan with the **hPanel Node.js** feature.

### Step 1: Upload Your Files
1. In Hostinger hPanel, go to **File Manager** or use **Git Deployment** under **Advanced** > **GIT**.
2. Upload your project files into your domain directory (e.g. `public_html` or a dedicated app directory such as `/home/uXXXXX/voice-era-tech`).
3. Ensure `.env.production` or `.env.local` is present with your credentials (see Environment Variables section below).

### Step 2: Create Node.js Application in hPanel
1. In hPanel, navigate to **Websites** > **Node.js** (or search for *Node.js*).
2. Click **Create Application** and configure the fields:
   - **Node.js Version:** `20.x` or `18.x` (Recommended: `20.x LTS`).
   - **Application Mode:** `Production`.
   - **Application Root:** The folder containing your project files (e.g., `public_html` or `/domains/yourdomain.com/public_html`).
   - **Application Startup File:** `server.js`
   - **Application URL:** Select your connected domain or subdomain.
3. Click **Create**.

### Step 3: Install Dependencies & Build
1. In the Node.js application card, open the **Terminal** / **SSH Access** (or click **NPM Run**):
   ```bash
   npm install --legacy-peer-deps
   npm run build
   ```
2. Click **Restart Application** in the hPanel Node.js dashboard.
3. Your website is now live!

---

## Method 2: Hostinger VPS (Ubuntu 22.04 / 24.04 with PM2 + Nginx)

Use this method if you have a Hostinger KVM / Linux VPS for optimal performance and scale.

### Step 1: Connect & Install Node.js
```bash
# Connect to your VPS via SSH
ssh root@YOUR_SERVER_IP

# Update package lists
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 LTS via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git nginx

# Verify installation
node -v   # Should show v20.x
npm -v
```

### Step 2: Clone and Setup Voice Era Tech
```bash
# Create application directory
mkdir -p /var/www/voice-era-tech
cd /var/www/voice-era-tech

# Clone or transfer your repository
git clone <YOUR_GIT_REPOSITORY_URL> .

# Copy environment variables
cp .env.example .env.production
nano .env.production   # Populate your values
```

### Step 3: Build Application
```bash
# Install dependencies
npm install --legacy-peer-deps

# Create production build
npm run build
```

### Step 4: Configure PM2 Process Manager
```bash
# Install PM2 globally
sudo npm install -g pm2

# Start Voice Era Tech using server.js
pm2 start server.js --name "voice-era-tech"

# Enable PM2 to restart on system boot
pm2 startup
pm2 save
```

### Step 5: Configure Nginx Reverse Proxy & SSL
Create the Nginx configuration file:
```bash
sudo nano /etc/nginx/sites-available/voice-era-tech
```

Paste the following configuration:
```nginx
server {
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    client_max_body_size 25M;
}
```

Enable the site and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/voice-era-tech /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

Install free SSL certificate with Certbot:
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Required Environment Variables Reference

Configure these in hPanel Environment Variables or in `.env.production`:

| Variable | Recommended Value | Notes |
|---|---|---|
| `NODE_ENV` | `production` | Enables production optimizations |
| `PORT` | `3000` (or assigned by Hostinger) | Automatically picked up by `server.js` |
| `TURSO_DATABASE_URL` | *Optional* | If blank, app automatically uses local SQLite in `data/voice_era_tech.db` |
| `TURSO_AUTH_TOKEN` | *Optional* | Read/write token for Turso Cloud |
| `ADMIN_EMAIL` | `admin@voiceeratech.com` | Login user for `/admin` portal |
| `ADMIN_PASSWORD` | `<your-secure-password>` | Login password for `/admin` portal |
| `SUPPORT_EMAIL` | `support@voiceeratech.com` | Destination inbox for inquiries |
| `KYC_EMAIL` | `kyc@voiceeratech.com` | Destination inbox for carrier applications |
| `NEXT_PUBLIC_APP_URL` | `https://yourdomain.com` | Public base URL |
| `SMTP_HOST` | `smtp.resend.com` or Hostinger SMTP | For outbound email delivery |
| `SMTP_PORT` | `587` (TLS) or `465` (SSL) | Hostinger default is 465 or 587 |
| `SMTP_USER` | `info@yourdomain.com` | Hostinger email account |
| `SMTP_PASS` | `<your-email-password>` | Password for email account |
| `SMTP_FROM` | `"Voice Era Tech" <info@yourdomain.com>` | Sender header |

---

## Verification Checklist on Hostinger
- [x] **Local SQLite Resilient Directory:** Created and verified writable in `data/voice_era_tech.db` (with automatic fallback to `os.tmpdir()` if permissions restrict root).
- [x] **Wholesale Carrier Application Form:** Tested on `/wholesale` with verified PDF generation and status tracking.
- [x] **Inquiries Contact Form:** Tested on `/` with ticket ID generation.
- [x] **Administrative Portal:** Accessible on `/admin` with dashboard metrics, KYC review, and PDF downloads.
- [x] **Hostinger Startup File:** [server.js](file:///g:/voice-era-tech/server.js) boots Next.js with automatic port resolution.
