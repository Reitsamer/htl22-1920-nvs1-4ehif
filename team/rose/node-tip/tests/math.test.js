test('Hello World!', () => {
    
} )

const math = require('../src/math.js');

test('Should calculate total with tip', () => {
    var total = math.calculateTotalTip(5,20)
    
    //if(total !== 6)
    //{
    //    throw new Error('Total tip should be 6. Got ' + total);       
    //}

    expect(total).toBe(6)

})

test('Should calculate total with default tip', () =>
{
    var total = math.calculateTotalTip(10)
    expect(total).toBe(12)
})









