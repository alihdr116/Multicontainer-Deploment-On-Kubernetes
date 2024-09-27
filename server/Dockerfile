# Use the official Node.js 16 image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies, including cors
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Install cors globally (optional)
RUN npm install -g cors

# Copy the rest of the server code into the container
COPY . .

# Start the backend with nodemon
CMD ["nodemon", "app.js"]

# Expose port 8001 for the backend API
EXPOSE 8001
