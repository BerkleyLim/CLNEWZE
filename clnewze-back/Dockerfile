# clnewze-back/Dockerfile
FROM openjdk:17
WORKDIR /app
COPY . .
RUN chmod +x mvnw
RUN ./mvnw package -X 
EXPOSE 8080
CMD ["java", "-jar", "target/clnewze-back-0.0.1-SNAPSHOT.jar"]
