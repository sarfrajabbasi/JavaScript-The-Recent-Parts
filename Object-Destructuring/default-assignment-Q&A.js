var o1 = {
    a:{
        c:3
    }
};

var o2 = {
    a:{},

};

var o3 = {};

// *************************
var {
    a:{
        b,
        c
    } = {
        b:10,
        c:20
    }
} = o3;



// strongly recommanded this
var {
    a:{
        b = 10,
        c = 20
    } = {}
} = o3;