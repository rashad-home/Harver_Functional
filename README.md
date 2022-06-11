Harver QA Exercise
========================

# Run Test

Node version v14.15.1

One time installation : 
"npm i" and "npm i cucumber"

and then
 "npm run test-hero"

 Configuration for this command is in package.json file. The data file is configured based on the command prompt argument. 
 ex: hero is the name of date file due to that reason when we execute in the command prompt we have mention it like "npm run test-hero" (../TestData/hero.env) - environment specific data file.

# Page object model
All the page elements are stored in a separate page classes. It's easy to identify the page elements. 
Also page.factory is added

# Test Reporting
Cucumber json reporting is attached to this automation framework, which will provide user friendly test reports with screenshot

# Folder Structure

Page objects
../../pages/homePage.js
../../pages/HomePage/dropdownPage.js

Feature
../../features/featureFiles/featureTest/herokuApp.feature

Step Definition 
../../features/step_definitions/herokuAppSD.js

# Change Feature file names according to the folder
Refer wdio.conf.js file

"const sourceSpecDirectory = `tests/features/featureFiles/featureTest`;"
"let featureFilePath = `${sourceSpecDirectory}/herokuApp.feature`;"
"featureFilePath = `${tmpSpecDirectory}//herokuApp.feature`;"

# Step Definition file
All the required step definition files will be addeed to regressionSD.js file and then that specific file is called in wdio.conf.js file.
"cucumberOpts: {
        require: [
            './tests/features/regression_testing/regressionSD.js',
            './tests/features/support/*.js'
        ],"

# Headless execution
Refer wdio.conf.js file 

browserName: 'chrome',
'goog:chromeOptions': { 
args: ['--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1920,1080']
}
