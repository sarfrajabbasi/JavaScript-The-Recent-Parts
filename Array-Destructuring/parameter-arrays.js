
function data(){
    return null;
}

var tmp = data() || [];

var first = tmp[0];
var second = tmp[1];
var third = tmp[2];
var fourth = tmp[3].slice(3);

// destructuring***********

function data(){
    return null;
}

var tmp;
var[
    first,
    second,
    third,
    ...fourth
] = tmp = data() || [];





// --------------------------------


function data(tmp=[]){
    var[
        first =10,
        second =20,
        third =30,
    ] = tmp;
}


// destructuring**************

function data([
    first = 20,
    second = 60,
    third = 30
] = []){
    // ......
}
