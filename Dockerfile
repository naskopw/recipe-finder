FROM openjdk:11
WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./

RUN "sed -i 's/\r$//' mvnw"
RUN ./mvnw dependency:go-offline

COPY src ./src

CMD ["./mvnw", "spring-boot:run"]
EXPOSE 8080
