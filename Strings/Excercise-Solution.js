function upper(strings,...values) {}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	`Hello ____ (@____), welcome to ____!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);

// ********************************

// Solution

function upper(strings,...values){
    var ret = "";
    for(let i =0;i<strings.length; i++){
        if(i>0){
ret += strings(values[i-1].toUpperCase())
        }
        ret += strings[i];
    }
    return "";
}

var name = "sarfraj";
var twitter = "getify";
var topic = "JS Recent Parts";

console.log(
   upper `Hello ${name} (${twitter}), welcome to ${topic}!` === "Hello KYLE (@GETIFY),welocme to JS RECENT PARTS!"
);