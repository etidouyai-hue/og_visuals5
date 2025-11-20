# OG Visuals Portfolio - Render Deployment Guide

## Quick Deployment Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Deploy on Render

1. Go to [render.com](https://render.com) and sign in with GitHub
2. Click **New +** → **Web Service**
3. Connect your GitHub repository
4. Configure the following settings:

   - **Name**: `og-visuals-portfolio` (or your preferred name)
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: Leave blank
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for custom domain)

5. Click **Create Web Service**

Your portfolio will be live at `https://your-app-name.onrender.com` within 5-10 minutes!

## Environment Variables

If you plan to add database or API features later, you can add environment variables in the Render dashboard under "Environment" settings.

## Custom Domain

To add a custom domain:
1. Go to your service dashboard on Render
2. Click on "Settings"
3. Scroll to "Custom Domain"
4. Add your domain and follow the DNS configuration instructions

## Important Notes

- **Node Version**: The app uses Node.js 20.x (specified in package.json)
- **Port**: The app automatically uses Render's PORT environment variable
- **Static Files**: React build is automatically served by the Express server
- **Client-Side Routing**: All routes are configured to work with Wouter

## Troubleshooting

### Build Fails
- Check that all dependencies are listed in package.json
- Ensure build command completes successfully locally first

### App Won't Start
- Verify the start command is `npm start`
- Check that the PORT environment variable is being used correctly

### 404 Errors on Page Refresh
- This shouldn't happen as the Express server is configured to serve index.html for all routes
- If it does, check server/vite.ts configuration

## Making Updates

After deployment, any push to your main branch will automatically trigger a new deployment on Render.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Render will automatically rebuild and redeploy your site.
