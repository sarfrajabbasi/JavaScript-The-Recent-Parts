function data(){
    return [1,2,3];
}

var tmp = data();
var first = tmp[0];
var second = tmp[1] !== undefined ? tmp[1] : "value add kar bhai";
var third = tmp[2];
var fourth = tmp.slice(3);

// *****************************Destr.**
function data(){
    return [1,2,3];
}
var tmp;
var [
    first,
    second=10,
    third,
    ...fourth
] = tmp = data();