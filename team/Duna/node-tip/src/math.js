const calculateTipWithTip = (total,tipPercentage=20)=>{
    return total*(1+tipPercentage/100)
}
module.exports={
    calculateTipWithTip
}