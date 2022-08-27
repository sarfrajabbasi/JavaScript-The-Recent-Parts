// flat******************8

var nestedValues = [1,[2,3],[[]],[4,[5]],6];

nestedValues.flat(0);
// [1, [2 , 3],[[]], [ 4, [ 5 ] ], 6]

nestedValues.flat(/*default :1*/);
// [1 , 2, 3, [], 4, [5], 6]

nestedValues.flat(2);
//[1,2,3,4,5,6]

// faltMap()******************

[1,2,3].map(function tuples(v){
    return [v*2, String(v*2)];

});
// [[2,"2"],[4,"4"],[6,"6"]]

[1,2,3].map(function tuples(v){
    return [v*2, String(v*2)];

}).flat;

// [2 , "2" , 4 , "4" , 6 , "6"]

[1,2,3].flatMap(function tuples(v){
    return [v*2, String(v*2)];

});

// [2, "2" , 4 , "4" , 6 , "6"]



// adds and remove elements form an array

[1,2,3,4,5,6].flatMap(function doubleEvens(v){
    if(v % 2 == 0 ){
        return [v,v * 2];
    }
    else{
        return [];
    }
});

// [2,4,4,8,6,12]