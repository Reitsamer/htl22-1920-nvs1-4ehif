const math = require('../src/math');

test('tip calculates correctly', () => {
    expect(math.calculateTip(5, 20)).toBe(6);
});

test('Should calculate total with default tip', ()=>{
    expect(math.calculateTotalWithTip(10)).toBe(12);
});