// promises:---
// this is call promise chaining
fetchCurrentOrders()//call
.then(function onUser(user){
    // then call .then on returned promise
    return Promise.all([
        fetchArchivedOrders(user.id),
        fetchCurrentOrders(user.id)
    ]);

})
.then(function onOrders(
    [archivedOrders,currentOrders]
){
    // ..
});



// sync-async(with generators) [this is sync-async pattern]

//   what generator can do is that,coz ther's an iterator protocol attached to it, it can pause itself by virtue of the yield keyword.
runner(function *main(){
    var user = yield fetchCurrentUser();
    // fetch the current user,and yield out the result of that,which is a promise.and then wait for that to come back.that whole statement pauses until we geta user bank.it does the pausing is actually that runner.using library utility.

    // archivedOrders, currentOrders = fetchArchivedOrders, fetchCurrentOrders
    var[archivedOrders, currentOrders] = 
    yield Promise.all([
        fetchArchivedOrders(user.id),
        fetchCurrentOrders(user.id)
    ]);
    // ..
});

// async-function
// use await keyword instead of yield,do the same thing.
async function *main(){
    var user = await fetchCurrentUser();//await on promise,and then get the value back.
    
// archivedOrders, currentOrders = fetchArchivedOrders, fetchCurrentOrders
    var[archivedOrders, currentOrders] = 
    await Promise.all([
        fetchArchivedOrders(user.id),
        fetchCurrentOrders(user.id)
    ]);
    // ..
};

main();//call async-function.
// this i sa style of asynchronous programming that many people.