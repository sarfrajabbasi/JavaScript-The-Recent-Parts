var msg = "Hello world";
// match l.
// it give two responses.

// give:--
// that's happens when we don't do any assertion at  all.
msg.match(/(l.)/g);
// ["ll","ld"]

// if you put a dollar sign assertion.
// now  restricted it to ld.
msg.match(/(l.)$/g);
// ["ld"]

// lookAheads assertion:--
msg.match(/(l.)(?=o)/g);
// only match if it followedby an o.
// ?= say i want to ensure that this pattern,like o,does match.that's called a positive lookahead.
// ["ll"]

msg.match(/(l.)(?!o)/g);
// ["lo","ld"]
// coz those not follow by an o.
// only when it't not followed by an o.
// use the negate symbol,and that is a negative lookahead.


// ***************************

// look-behind:----

var msg = "Hello World";

// positive
// only match l. if it si preceded by an e, which is why we get the ll match.
msg.match(/(?<=e)(l.)/g);
// ["ll"];

// negative
// only match and l. if it's not precede by e, which is why we get the lo and the ld match.
msg.match(/(?<!e)(l.)/g);
// ["lo","ld"]

