// Exercice 1 - File System
// var fs = require('fs');
// console.log(fs);
// fs.readFile('jour07.txt', function (err, data) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Lecture en différé : ' + data.toString());
// })
// fs.unlink('jour07.txt', function (err) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('jour07.txt à bien été supprimé');
// });
// console.log('Exercice 1');


// Exercice 02 - Map Double
//  var array = [1, 2, 3, 4, 5];

//  var double = array.map(function (number) {
//     return number * 2
//  });
//  console.log(double); // [ 2, 4, 6, 8, 10 ]
// console.log('Exercice 2')

// Exercice 03 - Map Names
// var longNames = [
//   { firstName: 'Jane', lastName: 'Doe' },
//   { firstName: 'John', lastName: 'Smith' },
// ];
// var shortNames = longNames.map(function (shortName) {
//   return shortName.firstName + ' ' + shortName.lastName;
// });
// console.log('Exercice 3');
// console.log(shortNames);

// // Exercice 04 - Filter Numbers
var array = [1, "toto", 34, "javaScript"];
var numbers = array.filter(function (num) {
    if(num === typeof Number) {
        return typeof num;
    } else {
        return "";
    }
});
console.log('Exercice 4')
console.log(numbers);

// Exercice 05 - Filter Even
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var even = numbers.filter(function (ev) {
    return ev % 2 === 0;
});
console.log('Exercice 5')
console.log(even);

// Exercice 06 - Cakes
var cakes = [
  {
    name: 'cake',
    flavor: 'vanilla',
    status: 'available',
  },
  {
    name: 'brownie',
    flavor: 'chocolate',
    status: 'available',
  },
  {
    name: 'pie',
    flavor: 'strawberry',
    status: 'available',
  },
  {
    name: 'muffin',
    flavor: 'pistachio',
    status: 'available',
  },
  {
    name: 'donut',
    flavor: 'chocolate',
    status: 'available',
  },
];
// je crée la variable des chocolats en rupture de vente
var soldOutCakes = cakes.filter(function (chocolateCake) {
  if (chocolateCake.flavor === 'chocolate') {
    chocolateCake.status = "sold out !"
    return chocolateCake.name + chocolateCake.flavor + chocolateCake.status;
  }
});
console.log('Exercice 6');
console.log(soldOutCakes);
