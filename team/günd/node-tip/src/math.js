const calculateTotalWithTip = (total, tipPercentage=20) =>  total * (1 + tipPercentage / 100)

//npm i jest --save-dev
// package.json => "test" : "jest"
module.exports = {
    calculateTotalWithTip
}