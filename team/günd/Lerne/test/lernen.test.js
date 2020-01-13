var lernen = require('../lernen.js')

test('the data is peanut butter', done => {
    function callback(data) {
      expect(data).toBe(undefined);  //Wegen callback(undefined,data) wird immer undefined zurückgegeben
      done();
    }
  
    lernen.geocode("Salzburg",callback);
  });

// test('Sollte Max grüßen',()=>{
//   expect(lernen.calculate(" max")).toBe("Hallo max");
// })