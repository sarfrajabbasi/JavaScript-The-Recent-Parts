

// Hints:
// function *power(poem){..}
function *powers(poem) { 
    //A look behind assertion thata says power of ,  mean next thing is we're about to match.and then caputirng group syntax is(?<>)macth with (?:a)and macth some word char.
    // another look behind assertion. 
    // we say that we 've match up until,
    // then we do a capturing group.cap gp name is verb.
    var re = /(?<=power of )(?<thing>(?:a )?\w+).*?(?<= can )(?<verb>\w+)/gs
    // use while loop
var match;
while(match  = re.exec(poem)){
    // .exec againts the poem string that was passed in,keep looping.
    // destructuring pattern aginst the match object.
    // in match have group property that represent any named capturing groups that i would have.
    let{
        groups : {

            //vribales
            thing,
            verb
        }
    } = match;
//   use template literal
    yield`${thing} : ${verb}`;
  }
}


// re = / .. /gs
// 
// while (match = re.exec(poem)) { .. }

// by Tupac Shakur
var poem = `
The power of a gun can kill
and the power of fire can burn
the power of wind can chill
and the power of a mind can learn
the power of anger can rage
inside until it tears u apart
but the power of a smile
especially yours can heal a frozen heart`;

for (let power of powers(poem)) {
	console.log(power);
}
// a gun: kill
// fire: burn
// wind: chill
// a mind: learn
// anger: rage
// smile: heal
