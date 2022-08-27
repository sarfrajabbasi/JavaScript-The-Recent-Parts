var obj = {
  a: 1,
  b: 2,
  c: 3,

  // for(let v of obj){
  //     console.log(v);
  // }

  // TypeError!
  // coz the for  of loop tries to access the symbol.iterator location on that obj object, and it doesn't find anything defined there so when it tries to execute, it's trying to execute the undefined value.

  // our own iterator factory function.
  // every tiem you call it you would produce a new instance of your iterator.you can iterate multiple time.

  [Symbol.iterator]: function () {
    // getting the list of keys for my object,which would be a,b,c.
    var keys = Object.keys(this);
    var index = 0;
    // return back an object
    return {
      // object property on it next.thats what iterators have.
      next: () =>
        // check to see if there's anymore to iterate over.if so it return done: false has the value.
        index < keys.length
          ? { done: false, value: this[keys[index++]] }
          : // otherwise it return done: true and value undefined.
            { done: true, value: undefined },
    };
  },
};
// it has the effect of pulling out the values from obj. into an array 1,2,3
[...obj];
// [1,2,3]
