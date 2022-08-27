function data(){
    return{ b:2,c:3,d:4};
} 

var tmp = data();
var first,second;

first = tmp.a;
second = tmp.b;



//   destructuring********************

function data(){
  return{a:1,b:2,c:3,d:4};
} 
var tmp;
var first,second;
tmp = { 
  a:first = 42,
  b:second,
  // c:third,
  ...third

} =data();