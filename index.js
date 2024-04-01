function receivesAFunction(callback){
    callback()

}

function returnsANamedFunction () {
    return function named () {
        console.log('hey Brian')

    }

}

function returnsAnAnonymousFunction () {
    return function () {
        console.log('hey you')

    }

}