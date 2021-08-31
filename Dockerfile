FROM openjdk:11
VOLUME /tmp
ADD target/recipe-finder-0.0.1-SNAPSHOT.jar ./recipe-finder-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","recipe-finder-0.0.1-SNAPSHOT.jar"]