FROM openjdk:17
ARG JAR_FILE=./target/config-server.jar
COPY ${JAR_FILE} config-server.jar
ENTRYPOINT ["java","-jar","/config-server.jar"]