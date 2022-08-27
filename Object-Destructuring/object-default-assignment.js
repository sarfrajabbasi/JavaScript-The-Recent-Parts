function data(){
    // return{ b:2,c:3,d:4};
    return;
} 

var tmp = data() || {};

first = tmp.a;
second = tmp.b;



//   destructuring********************

function data(){
//   return{a:1,b:2,c:3,d:4};
} 

var { 
  a = 42,
  b
  // c:third,

} =data() || {};