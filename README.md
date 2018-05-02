# Angular Bootcamp

### Why

This project was created as an exercise on how a pair of Pivots may begin a full-stack project using Angular and Spring
frameworks. We built a simple app for saving notes or other small blob of text.

### Frontend 
We used Angular 5 for our frontend. Used all the default tools and settings. Angular comes with a great setup for TDD
out of the box. We also leveraged the built in e2e setup for as our main end-to-end tests. If you're unfamiliar, checkout
[Angular](https://angular.io/guide/quickstart),
[Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html),
[Jasmine](https://jasmine.github.io/tutorials/your_first_suite),
[Karma](https://angular.io/guide/testing),
[Protractor](http://www.protractortest.org/#/).  
(No need to install these separately; everything comes out of the box with a new angular app created by `ng new my-app`)  
  
### Backend 
[Spring Boot](https://projects.spring.io/spring-boot/) with [Spring Initializr](https://start.spring.io/) provided a
quick and easy setup for our simple backend.  
Some useful links:
[Spring Guides](https://spring.io/guides),
[Rest Controllers](https://spring.io/guides/gs/rest-service/),
[JPA](https://spring.io/guides/gs/accessing-data-jpa/).
  
### Cloud Platform 
We used [Pivotal Web Services (PWS)](https://run.pivotal.io/) to host our apps. Using
[CF Cli](https://docs.run.pivotal.io/cf-cli/),
deploying both Angular and Spring apps was simple. See the follow along guide to learn how you can deploy your apps
in seconds.
  
### CI/CD 
We used [Concourse](https://concourse-ci.org/) to build, test, and deploy our apps automatically.
It integrated well with PWS. After fiddling a bit with [dockerfiles](https://hub.docker.com/r/djoo/angular-bootcamp/), configuring it was relatively easy.
  
  
### Did we get anything done?

Yes we did! [Link to the live app](http://angular-bootcamp-ui.cfapps.io/).

[![App Image](https://github.com/xtreme-david-joo/angular-bootcamp/blob/master/images/app_screenshot.png)](http://angular-bootcamp-ui.cfapps.io/)

[![CI Image](https://github.com/xtreme-david-joo/angular-bootcamp/blob/master/images/ci_deploy_fail.png)](https://github.com/xtreme-david-joo/angular-bootcamp/blob/master/ci/pipeline.yml)

# Follow Along Guide
  
Coming soon!  
  
  
...  