# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the site
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built site from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Create data directory
RUN mkdir -p /app/data

# Expose port 90
EXPOSE 90

# Start Astro in server mode
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "90"] 