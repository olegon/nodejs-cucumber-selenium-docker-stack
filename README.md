# nodejs + Cucumber + Selenium + Docker stack

This repository is an experiment using [nodejs](https://nodejs.org/en/), [Cucumber](https://cucumber.io/), [Selenium](https://www.selenium.dev/) and [Docker](https://www.docker.com/) to run e2e tests and output a JSON Cucumber Report.

## Running on docker

There are two scripts to help you with that.

### Running using Chrome

```bash
./util-docker-build-and-run-on-chrome.sh 
```

### Running using Firefox

```bash
./util-docker-build-and-run-on-firefox.sh 
```

## Running on your local machine
 
Before executing this experiment, download the browser drivers that matches your installed browser version:

- [Firefox driver download page](https://github.com/mozilla/geckodriver/releases)
- [Chrome driver download page](https://chromedriver.chromium.org/downloads)

After downloading it, decompress it inside the current repository and install the nodejs dependencies:

```bash
npm install
```

### Running using Chrome

```bash
SELENIUM_BROWSER=chrome npm test -- --tags @search --format json
```

### Running using Firefox

```bash
SELENIUM_BROWSER=firefox npm test -- --tags @search --format json
```
