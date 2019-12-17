const calculateTip = (total, tipPercentage) => {
    return total * (1 + (tipPercentage / 100))
};

const calculateTotalWithTip = (total) => {
  return calculateTip(10, 20)
};

module.exports = {
    calculateTip,
    calculateTotalWithTip
};