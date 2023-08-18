function getBMIStatus(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
}
function calculateBMI(height, weight) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}
function calculateAverageBMI(bmiValues) {
    if (bmiValues.length === 0) {
      return null;
    }
    const sum = bmiValues.reduce((accumulator, currentValue) => accumulator + currentValue);
    return (sum / bmiValues.length).toFixed(2);
}

module.exports = {getBMIStatus, calculateBMI, calculateAverageBMI}