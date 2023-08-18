# BMI-Calculator
This is a individual web project that uses HTML, CSS, Javascript in Express and a json file to store data that calculates BMI 
of individuals and displays the BMI on the same page as well as the highest, average and lowest BMI among the people that had 
their BMI calculated on a different page. The website also has build and acceptance tests that ensure that the code quality is 
high. This project supports CI/CD using GitHub actions and Render. The projects builds itself from the start on every pull or push 
to the main branch and runs the build and automated acceptance tests before it is finally deployed by Render.
#
URL of the website: https://bmi-calculator-8hed.onrender.com/ 

## 1. First set up the project as follows:
Download and install Visual Studio Code
#
Download and install Node.js
#
Download the zipped folder and unzip it OR clone the repository to your local machine
#
Open up the project within Visual Studio Code

## 2. Run the following commands:
npm install
#
npm install --save-dev jest

## 3. Run the project using the following command:
node index.js

## 4. Open a broswer and interact with the website using the following URL:
http://localhost:3000/

## 5. To run the tests, run the following commands in a new terminal:
npm test -- --coverage
#
node home_acceptance.js
