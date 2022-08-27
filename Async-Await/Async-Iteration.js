// issue with async-function
 
async function fetchFiles(files){
    var prs = files.map(getFiles);
// forEach method does not know what to do with a promise.
    prs.forEach(function each(pr){
        console.log(await pr);
    });

}



// better async FP(fasy provide ) iterations

// libraries fasy provide you with eager asynchronous iterator functions for all of your standard functions ,like map,fliter.
async function fetchFiles(files){
    var prs = await FA.concurrent.map(getFiles ,files);
// FA.serial.forEach knows what to do with that promise.normal forEach don't know what to do.
    await FA.serial.forEach(async function each(pr){
        console.log(await pr);
    },prs);

}
