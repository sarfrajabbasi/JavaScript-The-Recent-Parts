// find*************

var arr = [{a:1},{a:2}];
arr.find(function match(v){
    return v && v.a > 1;
});
// {a:2}
arr.find(function match(v){
    return v && v.a > 10;
});
// undefined

arr.find(function match(v){
    return v && v.a > 10;
});
// -1


// findeIndex*****************

arr.findIndex(function match(v){
    return v && v.a >10;
})



// includes***********************

var arr = [10,20,NaN,30,40,50];

arr.indexOf(30) != -1 //true

-arr.indexOf(20);  //-2(truthy)

-arr.indexOf(20);  // -0 (falsy)

// **************************
 arr.includes(20);  //true

 arr.includes(60);    //false

 arr.includes(20,3);  //false

 arr.includes(10,-2);   //false
 
 arr.includes(40,-2);   //true
 
 arr.includes(NaN);      //true
 
