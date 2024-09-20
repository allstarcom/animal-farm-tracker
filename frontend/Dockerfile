# Use Node.js official image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the frontend
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose port 3000 for serving the app
EXPOSE 3000

# Use serve to serve the build
CMD ["npx", "serve", "-s", "build"]
