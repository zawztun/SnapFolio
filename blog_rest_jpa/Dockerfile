FROM openjdk:17
WORKDIR /app
COPY . /app
RUN ./mvnw package

EXPOSE 8080
CMD ["java","-jar","target/blog_rest_jpa-0.0.1-SNAPSHOT.jar"]