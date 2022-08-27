function formatCurrency(strings,...values){
    var str = '';
    for(let i = 0;i<strings.length; i++){
        if(i>0){
            if(typeof values[i-1]=="number"){
                str+= `$${values[i-1].toFixed(2)}`;
            }
            else{
                str += values[i-1];
            }
        }
        str += strings[i]
    }
    return str;
}



var amount = 12.3;

var msg = 
formatCurrency
`The total for your order is ${amount}`;
console.log(msg);
// The total for your
// order is $12.30



// ******************************
// Applytagged templates


function logger(strings,...values){
    var str = "";
    for(let i = 0; i < strings.length; i++){
        if(i>0){
            if(values[i-1] && typeof values[i-1] == "Object"){
                if(values[i-1] instanceof Error){
                    if(values[i-1].stack){
                        str += values[i-1].stack;
                        continue;
                    }
                }else{
                    try{
                        str += JSON.stringify(values[i-1]);
                    }
                    catch (err) {}
            }
            }

            str += values[i-1];
        }
        str += strings[i];
    }
    console.log(str);
    return str;
}

var v =42;
var o = {a:1,b:[2,3,4]};
logger`This is my value:${v} and another: ${o}`;
// This is my value:42 and another: {"a":1,"b":[2,3,4]};

try{
    nothing();
}
catch(err){
    logger `Caught : ${err}`;

}

// Caught : ReferenceError : nothing is not defined
//   at <anonymous :2 : 3>

