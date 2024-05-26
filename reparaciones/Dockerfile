FROM openjdk:17
ARG JAR_FILE=target/reparaciones.jar
COPY ${JAR_FILE} reparaciones.jar
ENTRYPOINT ["java","-jar","/reparaciones.jar"]