var str = "Hello";
var world = ["w","o","r","l","d"];

var it1 = str[Symbol.iterator]();//iterator-symbol-calling
var it2 = world[Symbol.iterator]();

it1.next();   //{value : "H", done: false}
it1.next();   //{value : "e", done: false}
it1.next();   //{value : "l", done: false}
it1.next();   //{value : "l", done: false}
it1.next();   //{value : "o", done: false}
it1.next();   //{value : "undefined", done: true}

it2.next();   // {value : "w", done : false}
// ..

 