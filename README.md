# Cypress_Cucumber_framework_test

Clone repository:
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
 It will generate mochawesome-html report 
6.npm run posttest
 It will combine report and generate reports
