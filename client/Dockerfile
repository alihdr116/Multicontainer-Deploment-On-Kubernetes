# Use the official Node.js 16 image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client code into the container
COPY . .

# Start the React app
CMD ["npm", "start"]

# Expose port 3000
EXPOSE 3000
