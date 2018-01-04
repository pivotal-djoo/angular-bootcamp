ARG ANGULAR_CLI_VERSION=1.5.0
FROM teracy/angular-cli:$ANGULAR_CLI_VERSION

RUN npm install -g protractor@5.2.2 \
    && webdriver-manager update

