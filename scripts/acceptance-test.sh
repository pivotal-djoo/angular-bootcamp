./gradlew bootRun &
cd app_ui
npm install
ng e2e
kill -9 `pgrep -i java`