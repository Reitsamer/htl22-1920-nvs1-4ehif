const math = require('../src/math')


// test('Hello World', () =>{
//     //throw new Error('Your function failed!')
// })

test('Should calculate total with tip', () =>{
    var total = math.calculateTotalWithTip(10, 10)
    // if(a !== 11)
    //     throw new Error('Should be 11. Got ${a}')
    expect(total).toBe(11);
})


test('Should calculate total with default tip', () =>{
    var total = math.calculateTotalWithTip(10)

    expect(total).toBe(12);
})


