var str = "Hello";

for(
    let it = str[Symbol.iterator](),v,result;
    (result = it.next()) && !result.done &&
    (v = result.value || true);
){
    console.log(v);
}

// "H" "e" "l" "l" "o"

var str = "hello";
var it = str[Symbol.iterator]();

// i can iterate over iterator coz iterator is an iterable,it just returns itself.

for(let v of it){
    console.log(v);
}

//"H" "e" "l" "l" "o"

// for of iterble itself,the string, i can do  either way.

// basic ,built-in default ones just do a for of loop directly over the iterable value.

for(let v of str){
    console.log(v);
}

// "h" "e" "l" "l" "o"

var str = "Hello";

var letters = [...str];
// iterating it out, into the enclosing array
letters;
// ["H" ,"e" ,"l", "l" , "o"]