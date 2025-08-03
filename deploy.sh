#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Deploying Phillip's Portfolio..."

# Create logs directory if it doesn't exist
mkdir -p logs

# Stop existing container if running
echo "📦 Stopping existing container..."
docker-compose down

# Build and start the container
echo "🔨 Building and starting portfolio container..."
docker-compose up -d --build

# Check if container is running
if docker ps | grep -q "phill-portfolio"; then
    echo "✅ Portfolio deployed successfully!"
    echo "🌐 Your portfolio is now available at: http://your-server-ip"
    echo "📊 Container status:"
    docker ps | grep phill-portfolio
else
    echo "❌ Deployment failed. Check logs with: docker-compose logs"
    exit 1
fi

echo ""
echo "📋 Useful commands:"
echo "  View logs: docker-compose logs -f"
echo "  Stop site: docker-compose down"
echo "  Restart: docker-compose restart"
echo "  Update: ./deploy.sh" 