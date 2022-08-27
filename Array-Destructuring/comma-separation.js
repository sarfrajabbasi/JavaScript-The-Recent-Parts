function data(){
    return [1,2,3];
}

var tmp = data();
var first = tmp[0];
// var second = tmp[1];
var third = tmp[2];
var fourth = tmp.slice(3);

// *****************************Destr.**
function data(){
    return [1,2,3];
}

var [
    first,
    ,
    second=10,
    third,
    ,
    ,
    ,
    ...fourth
] = data();
// ***********************************

var x = 10;
var y = 20;
{
    let tmp = x;
    x=y;
    y= tmp;
}

// *****************************Destr.**

var x = 10;
var y = 20;
[y,x] = [x,y];