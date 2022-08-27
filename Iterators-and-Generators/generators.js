function *main(){
    // * that indicates that we are dealing with a special kind of function called a generator.
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
var it = main();

it.next();   //{value:1, done :false}
it.next();   //{value:2, done :false}
it.next();   //{value:3, done :false}
it.next();   //{value:4, done :true}

[...main()];
// as soon as true,it stops it doesn'tkeep the value at that moment it assumes that it is iterated past it. so that is the effect of throwing away the value 4.
// [1,2,3]




var obj = {
    a:1,
    b:2,
    c:3,
    *[Symbol.iterator](){

        // Symbol.iterator it's just concise method it doesn't take any inputs here.

        // it's behavior by default is to iterate over all the keys.

        // this function is going to be that generator type.

        for(let key of Object.keys(this)){
            // obejct.keys returns me an array.and arrays are iterables.
            yield this[key];
            // yield out this of keys which would be values.
        }
    }
};

[...obj];
// 
// [1,2,3]
// iteration over obj that you don't about the keys,you only care about the values.

// yield key[a,b,c]


