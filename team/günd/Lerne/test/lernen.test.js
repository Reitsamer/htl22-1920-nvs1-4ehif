var lernen = require('../lernen.js')

test('the data is peanut butter', done => {
    function callback(data) {
      expect(data).toBe('peanut butter');
      done();
    }
  
    lernen.calculate(callback);
  });