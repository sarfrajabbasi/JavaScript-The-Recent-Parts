async function fetchURLs(urls){

    for(let url of urls){
        let resp =yield fetch(url);
        if(resp.status == 200){
            let text =yield resp.text();
            yield text.toUpperCase();
            
        }
        else{
            yield undefined;
        }
    }
    
}

// -----------async function

// it's not gonna quite work and let's see why.
async function fetchURLs(urls){
    var prs = urls.map(fetch);

    for(let url of urls){
        let resp =await fetch(url);
        if(resp.status == 200){
            let text =await resp.text();
            yield text.toUpperCase();
            
        }
        else{
            yield undefined;
        }
    }
    
}

// assumption loop

for(let text of fetchURLs(favoriteSites)){
    console.log(text);
}


var it = fetchURLs(favoriteSites);

while(true){
    let res = it.next();
    if(res.done) break;
    let text = res.value;
    console.log(text);
}

async function main(favoriteSites){
    var it = fetchURLs(favoriteSites);

    while (true){
        let res = await it.next();
        if(res.done) break;
        let text = res.value;

        console.log(text);
    }
}

async function main(favoriteSites){
    
    for(let text of fetchURLs(favoriteSites)){
        console.log(text);
    }
    
}