const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const {getBMIStatus, calculateBMI, calculateAverageBMI} = require('./functions');

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (request, response) {
  response.render('home');
});

app.post('/calculate_bmi', urlEncodedParser, function (request, response) {
    const age = request.body.age;
    const height = request.body.height;
    const weight = request.body.weight;
  
    const bmi = calculateBMI(height, weight);
    const status = getBMIStatus(bmi);
  
    const user = {
      age: age,
      height: height,
      weight: weight,
      bmi: bmi,
      status: status
    };
  
    saveUserDetails(user);
  
    response.render('home', { bmiResult: bmi, bmiStatus: status });
  });

function saveUserDetails(user) {
    fs.readFile('data.json', 'utf8', function (err, data) {
      if (err) {
        console.log(err);
      } else {
        let userDetails = [];
        if (data) {
          userDetails = JSON.parse(data);
        }
        userDetails.push(user);
        const json = JSON.stringify(userDetails, null, 2);
        fs.writeFile('data.json', json, 'utf8', function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log('User details saved.');
          }
        });
      }
    });
  }  
app.get('/report', function (request, response) {
    fs.readFile('data.json', 'utf8', function (err, data) {
      if (err) {
        console.log(err);
        response.render('report', { averageBMI: null, highestBMI: null, lowestBMI: null });
      } else {
        const userDetails = JSON.parse(data);
        const bmiValues = userDetails.map((user) => parseFloat(user.bmi));
  
        const averageBMI = calculateAverageBMI(bmiValues);
        const highestBMI = Math.max(...bmiValues);
        const lowestBMI = Math.min(...bmiValues);
  
        response.render('report', { averageBMI: averageBMI, highestBMI: highestBMI, lowestBMI: lowestBMI });
      }
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});