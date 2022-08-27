
var defaults = {
    url : "http://some.base.url/api",
    mathod : "post",
    headers:[
        "cantent-type : text/plain"
    ]
};

console.log(defaults);

// *****************************

var settings = {
    url : "http://some.other.url",
    data :42,
    callback : function(resp){/*...*/}
};

// underscore extend(..)
ajax(_.extend({},defaults,settings));

// or:ajax.assign({}.defaults,settings));
// ****************************
// destructuring
function ajeaxOptions({
    url = "http://some.base.url/api",
    method = "post",
    data,
    callback,
    headers:[
        headers0 = "content-type: text/plain",
        ...otherHeaders
    ] = []
} = {}){

    // restructuring
    return {
        url,method,data,callback,
        headers:[
            headers0,
            ...otherHeaders
        ]
    };
}

// with no arguments,returns the defaults
// /as an object if necessary
var defaults = ajeaxOptions();
console.log(defaults);

// *********************************

var settings = {
    url : "http://some.other.url/",
    data :42,
    callback:function(resp){/*...*/}
};

// with an argument, mixes in the settings
// /w/the defaults

ajax(ajeaxOptions(settings));


