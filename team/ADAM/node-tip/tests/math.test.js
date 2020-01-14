let math = require('../src/math');

test('Should calculate total with tip', () => {
    let total = math.calculateTip(5, 20);
    // if(total !== 6)
    //     throw new Error('Total tip should be 6. Got ', total)
    expect(total).toBe(6)
});

test('Should calculate total with default tip', () => {
    let total = math.calculateTip(10);
    expect(total).toBe(12)
});

