function data(){
    return [1,2,3];
}

var tmp = data();
var first,second,third,fourth;
 first = tmp[0];
 second = tmp[1] !== undefined ? tmp[1] : "value add kar bhai";
 third = tmp[2];
 fourth = tmp.slice(3);
 
 var tmp = data();
var o ={}
 o.first = tmp[0];
 o.second = tmp[1] !== undefined ? tmp[1] : "value add kar bhai";
 o.third = tmp[2];
 o.fourth = tmp.slice(3);
 
 var tmp = data();
var o ={}
 o.first = tmp[0];
 o.second = tmp[1] !== undefined ? tmp[1] : "value add kar bhai";
 o.third = tmp[2];
 o.fourth = tmp.slice(3);
 
 var tmp = data();
var o ={}
 o[3]= tmp[0];
 o[10] = tmp[1];
 o[42]= tmp[2];
 o[100] = tmp.slice(3);

// *****************************Destr.**
function data(){
    return [1,2,3];
}
var tmp;
var o = {};
var [
    o.first,
    o.second=10,
    o.third,
    ...o.fourth,

    o[3],
    o[10]=10,
    o[42],
    ...o[100]


] = tmp = data();