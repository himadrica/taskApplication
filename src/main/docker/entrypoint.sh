#!/bin/sh

echo "The application will start in ${JHIPSTER_SLEEP}s..." && sleep ${JHIPSTER_SLEEP}
cp task-application-0.0.1-SNAPSHOT.war app.war
exec java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar "app.war" "$@"
