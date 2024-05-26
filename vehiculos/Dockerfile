FROM openjdk:17
ARG JAR_FILE=target/vehiculos.jar
COPY ${JAR_FILE} vehiculos.jar
ENTRYPOINT ["java","-jar","/vehiculos.jar"]