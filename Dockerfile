# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build Next.js application
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000
CMD ["npm", "start"]