var obj = {
    a:1,
    // b:{
    //     x:2
    // },
    b:[500,5000],
    c:3
};
// array inside obj and obj inside array pattern
var {
    a,
    b,
    // b : {
    //     x:w
    // },
    b:[
       w,
       y
    ] = [],
    c
} = obj;