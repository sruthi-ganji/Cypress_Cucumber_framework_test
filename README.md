# Cypress_Cucumber_framework_test
# description:

Cypress is a open-source and modern end-to-end testing framework built for web applications,it is designed to simplify and enhance the testing process by providing a user-friendly approach to writing and running tests scripts. 
Here are some features why we consider Cypress for this project is easy,real-time reload and time travel,automatic waiting and retries,
interactive test runner,fast and consistent,debugging made easy,end-to-end testing,time travel and snapshots,great community and active development.

## Clone repository:
https://github.com/sruthi-ganji/Cypress_Cucumber_framework_test.git
or
git@github.com:sruthi-ganji/Cypress_Cucumber_framework_test.git

## How to Run:

1. npm install cypress
   -> installs all missing libraries and files, node modules etc.
2. Open terminal

## To run scrcipt files 
1. npx cypress run --spec="filename" --browser=chrome --headed //To run a single file
2. In other way we can run 
   npx cypress open -> select e2econfiguration ->select browser  ->select which file you want to run
#
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.
Launches the test runner in the interactive watch mode and run.

# Test Results and Reports
For test results checking we are collecting in different types
**Videos
**Screenshots

## Alternatively, you can also use npm scripts to run existing script placed in package.json:
1.npm run scripts 
 It will execute all the files
2.npm run requestQuotation
 It will execute only requestQuotation file
3.npm run clean:reports
 It will clean the existing the reports
4.npm run combine-reports
 It will combine and merge all the existing report
5.npm run generate-report
- It will generate mochawesome-html report 
       Mochawesome Report in Cypress refers to the test report that is generated after 
      running your test suite. It provides a summary of the test execution results,
      including information about passed and failed test cases, test durations, and more.
      The report helps you quickly identify the status of your test suite and any potential 
      issues that need attention.
6.npm run posttest
 It will combine report and generate reports
