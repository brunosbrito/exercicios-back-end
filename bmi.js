// Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.

const readline = require('readline-sync')

const weight = readline.questionInt('What\'s your weight? (kg) ');
const height = readline.questionFloat('What\'s your height? (cm) ');

function calculatorBMI() {

  const bmi = weight / (height * 2);

  return bmi;
}

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  }
}

function resultBMI(bmi) {
  const status = Object.keys(BMI_MAX_AND_MIN);

  const result = status.find((e) => {
    const {maxBMI, minBMI} = BMI_MAX_AND_MIN[e];

    return bmi >= minBMI && bmi <= maxBMI;
  })

  return result;
}

const teste = resultBMI(calculatorBMI());

console.log(teste);
