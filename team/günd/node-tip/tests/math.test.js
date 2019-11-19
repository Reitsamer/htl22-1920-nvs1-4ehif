const math = require('../src/math')

test('Should calculate total with tip', () => {
    var total = math.calculateTotalWithTip(5,20)
    //if (total !== 6)
    //    throw new Error('Total tip should be 6. Got' + total)
    expect(result).toBe(6)
})

test('Should calculate total with default tip', () => {
    var total = math.calculateTotalWithTip(10)

    expect(total).toBe(12)
})