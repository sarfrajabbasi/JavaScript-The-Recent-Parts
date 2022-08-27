function data(){
    return [1,[2,5],3];
}

var tmp = data() || [];

var first = tmp[0];
var tmp2 = tmp[1] || [];
var second = tmp2[0];
var third = tmp2[1];
var fourth = tmp[2];


// destructuring***********

function data(){
    return [1,[2,5],3];
}

var tmp;
var[
    first = 10,
    [ 
    second,
    third
] =[],
fourth

] = tmp = data() || [];
