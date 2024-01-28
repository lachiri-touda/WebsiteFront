# Use an official Node.js runtime as a parent image
FROM amd64/node:20

# Set the working directory
WORKDIR /src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install --force

# Copy the rest of the application code to the container
COPY . .

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Build the Angular app for production
RUN npm run build --prod

# Expose the port the app runs on
EXPOSE 80

# Start the app
CMD ["npm", "start"]
