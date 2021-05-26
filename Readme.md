**Description**
* This repository consists a javascript project for browser automation
* Node.js, WebdriverIO, and Cucumber have been used for UI test automation
* The development environment was as follows:
    - Operating System: Windows 10
    - Node.js: Version 14.16.0  
    - Browsers used for UI testing: 
        + Google Chrome Browser - Version 89.0.4389.82 (Official Build) (64-bit)
    - Development IDE: Visual Studio Code

**How to run?**

**To run browser tests locally with Allure report:**
Pre-requisite:
- Node.js is installed in the host machine

1. Unzip the uploaded zip file
2. Go to the root folder folder and type `npm install` on a preferred command line interface
3. Once the installation is finished type `npm run test-allure-report` to run the tests
4. Once the run is finished - a spec report on command line will be generated and a Allure report will be opened in the browser

**To run browser tests locally with junit-html report:**
Pre-requisite:
- Node.js is installed in the host machine

1. Unzip the uploaded zip file (if not done already)
2. Go to the root folder and type `npm install` on a preferred command line interface (if not done already)
3. Once the installation is finished type `npm run test-junit-report` to run the tests
4. Once the run is finished - a spec report on command line will be generated and a junit html report will be generated in the `junit-report` folder

**To run browser tests in a docker container with Allure report:**
Pre-requisite:
- Node.js is installed on the host machine
- Docker daemon is running on the host machine 

1. Unzip the uploaded zip file (if not done already)
2. Go to the root folder and type `npm install` on a preferred command line interface (if not done already)
3. From the root folder type `docker-compose -f docker-compose.yml up -d` to start the selenium hub and node
3. Once the installation is finished type `npm run test-docker-allure-report` to run the tests
4. Once the run is finished - a spec report on command line will be generated and a Allure report will be       opened in the browser of host machine
5. Type `docker-compose stop` to stop the docker containers started in step 3

**Note:**
- Some sample local run reports are available in the `local-run-reports` folder