SPRING_PROFILES_ACTIVE=test ./gradlew bootRun &
cd app_ui
npm install
ng e2e --environment=blue
kill -9 `pgrep -i java`