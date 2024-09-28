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

# Download and set up wait-for-it script
RUN curl -o wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x wait-for-it.sh

# Start the backend with nodemon
CMD ["./wait-for-it.sh", "mysql:3306", "--", "nodemon", "app.js"]

# Expose port 8001 for the backend API
EXPOSE 8001
