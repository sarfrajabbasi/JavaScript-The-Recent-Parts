  function data(){
      return{ b:2,c:3,d:4};
  } 

  var tmp = data();
  var first = tmp.a !== undefined ? tmp.a : 42;
  var second = tmp.b;
  var third = tmp.c;


//   destructuring********************

function data(){
    return{a:1,b:2,c:3,d:4};
} 

var{ 
    a:first = 42,
    b:second,
    // c:third,
    ...third

 } =data();


 var o = {
     prop : value,
     target :source
 };

 var {
    prop : value, 
     source : target
 } = o;

