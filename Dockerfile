# Stage 1: Build the React application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first
# This allows Docker to cache this layer if dependencies haven't changed
COPY package*.json ./

# Install dependencies
# Use --frozen-lockfile or --ci for production builds to ensure deterministic installs
RUN npm ci --prefer-offline --no-audit

# Copy the rest of the application code
COPY . .

# Build the React app
# Set CI=true to treat warnings as errors in CI environments, common for production builds
RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:stable-alpine AS production

# Copy custom Nginx configuration
# This is crucial for single-page applications (SPAs) like React to handle routing correctly.
# Create a file named `nginx.conf` in the same directory as your Dockerfile.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default Nginx welcome page and other unnecessary files
RUN rm -rf /etc/nginx/html/*

# Copy the built React app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (Nginx default)
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
