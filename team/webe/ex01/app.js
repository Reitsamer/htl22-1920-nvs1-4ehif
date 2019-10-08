const fs = require('fs');

var x = 'test string';
console.log(x);
var testarray = ['La', 'Le', 'Li'];
console.log(testarray.join());

function Person(vn, nm, plz, addr, gebdat) {
    this.firstname = vn;
    this.lastname = nm;
    this.plz = plz;
    this.addr = addr;
    this.dateOfBirth = gebdat;
}

Person.prototype = {
    output: function () {
        console.log(`Vorname: ${this.firstname} Nachname: ${this.lastname}`);
    }
};
var one = new Person('Jeff', 'Hunger', '1190', 'deinleingasse 15', '19-03-1996');
var two = new Person('Peter', 'Romi', '9876', 'Adressenstrasse 3', '31-11-2003');
var objectarr = [two, one];
for (var i in objectarr) {
    objectarr[i].output();
}

function sort(a, b) {
    var x = a.nachname;
    var y = b.nachname;
    if (x === y) {
        x = a.vorname;
        y = b.vorname;
    }
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}

objectarr.sort(sort);
objectarr.forEach(i => {
    i.output()
});

try {
    const data = fs.readFileSync('persons.db');
    var personData = JSON.parse(data);
    console.log(personData);
} catch (err) {
    console.log('Error:', err);
}


