const math = require('../src/math')

test('Valid Tip-test', () => {
    expect(math.calculateTotalWithTip(5, 20)).toBe(6)
})

test('Valid Tip-test2', () => {
    expect(math.calculateTotalWithTip(10)).toBe(12)
})