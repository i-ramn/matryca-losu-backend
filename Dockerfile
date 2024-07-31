# Use an appropriate base image for ARM64
FROM node:21.5.0

# Install dependencies
RUN apt-get update && apt-get install -y wget gnupg ca-certificates

# Add Chromium source and install Chromium for ARM64
RUN apt-get update && apt-get install -y chromium

# Set environment variable to use the installed Chromium
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

WORKDIR /app

# Copy application files
COPY . .

# Install node modules
RUN npm install

# Start the application
CMD ["npm", "run", "start:dev"]