var numbers = {
    // generator
    // it's a function that going to receive some inputs.
    *[Symbol.iterator]({
        // object destructuring
        start = 0,
        end = 100,
        step = 1
    } = {}){
        // i increment and yield out values.
        for(let i = start; i<= end ; i += step){
            yield i;
        }

    }

};

// /should print0..100 by 1s

for(let num of numbers){
    console.log(num);
}

// should print 6..30 by 4s

console.log(`My lucky numbers are :${ 
    // speading numbers which is iterable
    //call symbol.iterator function
[...numbers[Symbols.iterator]({
    start : 6,
    end:30,
    step : 4
})]

}`);

// hint
// [...numbers[symbol.iterator](??)]

