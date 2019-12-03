const math = require("../src/math.js")
//tests mit npm install jest --save-dev 
// package json von dem error zu jest ändern
//tests immer mit should ändern
test("Calculate test ",()=>{
   
    expect( math.calculateTipWithTip(130,20)).toBe(156)
})
test("should calcualte total with default tip",()=>{
    var total=math.calculateTipWithTip(130)
    expect(total).toBe(156)
})