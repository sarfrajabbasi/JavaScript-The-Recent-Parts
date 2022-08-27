// But I don't want it to actually be like subject to waiting on other event handlers, there's essentially internal in the event loop, this thing called the micro task queue. And promises when ever they need to resolve an asynchronous operation they actually don't queue an event loop item, they queue something in the micro task queue.

// [00:02:32]
// And that means that they essentially are cutting to the front of the line. So anything that's built up waiting like any ajax or other events handlers that are all waiting on the event loop. They don't get a chance to fire as long as something keeps getting added to the micro task queue.

// [00:02:49]
// The effect of this is that certain programming patterns can either intentional or accidentally end up creating an infinite loop, where a promise keeps adding a new micro-task queue. And it keeps consuming that event loop and it never lets anything else in the program resolve. And there's a term for that in broader concurrency programming.

// [00:03:13]
// That's called starvation. It's a big enough problem like whole PhD theses have been done on people studying the problems of starvation and algorithms to avoid starvation within computer programs. Starvation creates a form of denial of service, it creates a form of deadlock These are big big problems in computer science.


// External Cancelation

// cancelable async functions
async function fetchFiles(files){
    var prs = await FA.concurrent.map(getFiles,files);
    await FA.serial.forEach(async function each(pr){
        console.log(await pr);
    }, prs);
}

var token = new CAF.cancelToken();
var main =CAF(function *main(signal,url){
    var resp = yield fetch(url,{signal});
    // ..
    return resp;
});

main(token.signal,"http://some.tld/other").then(onResponse,onCancelOrError);

// only wait 6 seconds for the request!

settimeout(function onElapsed(){
    token.abort("Request took too long!");
},5000);





// timeOut cancelation :-

var timeOutToken = CAF.timeOut(5000,"Took too long!");

var main =CAF(function *main(signal,url){
    var resp = yield fetch(url,{signal});
    // ..
    return resp;
});

main(timeOutToken,"http://some.yld/other").then(onResponse,onCancelOrError);