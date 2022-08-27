var msg = "Hello world";

msg.match(/.(l.)/);
// in regular expressions,parenthesis are not just grouping operators.they also capturing operators.
// ["ell","ll"]

msg.match(/([jkl])o wor\1/);
// whatever comes before the o,and back\1 that says match that same thing later in the pattern.
// ["lo worl","l"]

msg.match(/(?<cap>l.)/).groups;
// make capturing group called cap.
// inside  of gorup we have name property called cap.
// we can access any named capturing groups from our regular expression and whatever values were in those named groups.
// [cap:"ll"]

msg.match(/(?<cap>[jkl]o Wor\k<cap>/);
///also use this syntax,back refernce form
//// ["lo Worl ","l"]

msg.replace(/(?<cap>l.)/g,"-$<cap>-");
// use thoseour replace,use named captuirng in replace pattern.
// "He-ll-o Wor-ld-"

msg.match(/(?<cap>l.)/g,function re(...args){
    var[,,,,{cap}] = args;
    return cap.toUpperCase();
});

// we can receive it in the function callback that we pass to replace.
// "Hello World"