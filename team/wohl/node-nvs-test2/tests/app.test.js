const fun = require('../src/fun')
const prom = require('../src/promise')

test('Valid promise', () => {
    return prom.funcwithpromise('696969').then(result => {

      expect(result.test).toBe(true);

    });
  });

test('Valid callback', done => {

    fun.funcwithcallback('696969', (error, {test}) => {
        
        expect(test).toBe(true);
        done();
    })

});