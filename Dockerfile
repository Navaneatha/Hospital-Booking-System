# Stage 1: Build the React Application
FROM node:20 AS frontend-build
WORKDIR /app/frontend

# Copy only package.json and package-lock.json first to cache dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the frontend source code and build it
COPY frontend/ ./
RUN npm run build


# Stage 2: Build the Spring Boot Application
FROM maven:3.9-eclipse-temurin-21 AS backend-build
WORKDIR /app/backend

# Copy the pom.xml and source code
COPY hospital/pom.xml ./
COPY hospital/src ./src

# Copy the built React app into the Spring Boot static resources folder
# so Spring Boot can serve it at the root URL
COPY --from=frontend-build /app/frontend/build ./src/main/resources/static

# Package the application (skipping tests for faster deployment)
RUN mvn clean package -DskipTests


# Stage 3: Run the Application
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app

# Copy the packaged war file from the backend-build stage
COPY --from=backend-build /app/backend/target/*.war ./app.war

# Expose the port the app runs on
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.war"]
