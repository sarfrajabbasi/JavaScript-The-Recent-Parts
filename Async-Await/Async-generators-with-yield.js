// async-all-at-once

async function fetchURLs(urls){
    var results =[];
// loop thorugh a set of URLs and fetch out those responses. get the text asynchronously and push it into an array.

    for(let url of urls){
        let resp =await fetch(url);
        if(resp.status == 200){
            let text =await resp.text();
            results.push(text.toUpperCase());
            
        }
        else{
            results.push(undefined);
        }
    }
    return results;
}



// overload yield (bad coding)

// theoertically if we were to switch this from an async* function into a generator then theorectically we could actually support .
function *fetchURLs(urls){
    
    for(let url of urls){
        let resp =yield fetch(url);//pull
        if(resp.status == 200){
            let text =yield resp.text();
            yield text.toUpperCase();//push
            
        }
        else{
            yield undefined;
        }
    }
    
}

// --------------async function

function *fetchURLs(urls){
    
    for(let url of urls){
        let resp =await fetch(url);//pull
        if(resp.status == 200){
            let text =await resp.text();
            yield text.toUpperCase();//push
            
        }
        else{
            yield undefined;
        }
    }
    
}