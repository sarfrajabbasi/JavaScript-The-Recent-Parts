function data(){
    return{a:1,
        // b: {
        //     c:3,
        //     d:4
        //  }
    };

} 

var tmp = data() || {};

var a = tmp.a;
var b = tmp.b ||{};
var c = b.c;
var d = b.d;



//   destructuring********************

function data(){
    return{
        a:1,
        b: {
            c:3,
            d:4
         } = {}
    };
} 

var { 
  a = 42,
  b :{
    //   c:c,
      c,
    //   d:d
      d
  }

} =data() || {};