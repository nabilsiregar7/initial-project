# Automation Test with WebdriverIO Javascript
# Installation
* type `npm init wdio` command
* type `npm install` command

# Run
* type `npm run wdio` command

# Generate Allure report
* `npm install @wdio/allure-reporter --save-dev`
* `npm install -g allure-commandline --save-dev`
* run the test `npm run wdio`
* type `npx allure generate && allure open`
* open index.html file on allure-report folder