# Deployment Guide

## Environment Variables

### Required Environment Variables

1. **ADMIN_PASSWORD**: Set this to a strong, unique password for the admin dashboard

### Setting Environment Variables

#### Option 1: Docker Compose (Recommended)
Create a `.env` file in your project root:
```bash
ADMIN_PASSWORD=your-super-secure-password-here
NODE_ENV=production
```

Then run:
```bash
docker-compose up -d
```

#### Option 2: Docker Run
```bash
docker run -d \
  -p 90:90 \
  -e ADMIN_PASSWORD=your-super-secure-password-here \
  -e NODE_ENV=production \
  -v $(pwd)/data:/app/data \
  --name phill-portfolio \
  your-image-name
```

#### Option 3: GitHub Actions (CI/CD)
Add this to your GitHub repository secrets:
- `ADMIN_PASSWORD`: Your admin password

Then in your workflow:
```yaml
- name: Deploy to server
  run: |
    echo "ADMIN_PASSWORD=${{ secrets.ADMIN_PASSWORD }}" >> .env
    docker-compose up -d
```

## Security Notes

- **Never commit your `.env` file** to version control
- **Use a strong password** (12+ characters, mix of letters, numbers, symbols)
- **The `.env` file is already in `.gitignore`** to prevent accidental commits
- **Data directory is mounted as a volume** for persistent visitor tracking

## Access Points

- **Main Site**: `http://your-domain:90/`
- **Admin Dashboard**: `http://your-domain:90/admin`
- **API Endpoint**: `http://your-domain:90/api/track`

## Data Persistence

Visitor data is stored in the `./data` directory and mounted into the container. This ensures your tracking data persists across container restarts and updates.
