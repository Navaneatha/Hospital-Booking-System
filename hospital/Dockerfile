# ===== 1. Build stage =====
FROM maven:3.9-eclipse-temurin-21 AS build

WORKDIR /app

# Copy Maven descriptor and download deps first (caches better)
COPY pom.xml .
RUN mvn -B dependency:go-offline

# Copy the rest of the source and build
COPY src ./src
RUN mvn -B clean package -DskipTests

# ===== 2. Runtime stage =====
FROM eclipse-temurin:21-jre

WORKDIR /app

# Copy the built war from the build stage
COPY --from=build /app/target/hospital-0.0.1-SNAPSHOT.war app.war

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.war"]