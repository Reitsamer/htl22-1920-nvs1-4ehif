const conv= require('../src/math');

test('Should calculate total with tip', ()=>{
    var total = conv.calculateTotalTip(5,20);

    //if(total!==6){
       // throw new Error("The tip is wrong");
    //}

    expect(total).toBe(6);
})


test('Should calculate total with default tip',()=>{
    var total = conv.calculateTotalTip(10);

    expect(total).toBe(12);
})