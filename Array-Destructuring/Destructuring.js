// Destructuring: imperative

var tmp = getSomeRecords();
var first = tmp[0];
var second = tmp[0];

var firstName = first.name;
var firstEmail = first.email !== undefined ?
first.email : "nobody@none.tld";

var secondName = second.name;
var secondEmail = second.email !== undefined ?
second.email : "nobody@none.tld"

// destructuring : declarative
var [
    {
        name: firstName,
        email: firstEmail = "nobody@none.tld"
    },
    {
        name:secondName,
        email:secondEmail ="nobody@none.tld"
    }
] = getSomeRecords();