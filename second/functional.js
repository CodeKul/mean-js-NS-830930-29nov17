let fun = () => {
    console.log('Functional Flow')
    return 20
}

let nrmFn = function (x) {
    return x * x
}

let inFn = x => x * x

console.log(nrmFn(50))
console.log(inFn(5))
console.log({
    nm: 'android',
    age: 10
})

function showDetails(callBack) {
    setTimeout(
        () => callBack(),
        1500
    )
}

showDetails(fun)

console.log(`Normal Flow ${fun()}`)

// clojoure
function fun2() {
    return function () {
        return `CodeKul`
    }
}

let fnOut = fun2()

console.log(`Well function is ${fnOut()}`)

// Module Design Pattern
let Car = (function () { // IIFE
    return {
        spd: 15,
        eng: 4
    }
})()

let Mercedez = (cr => {
    console.log(`Speed of car is ${cr.spd}`)
    return () => console.log(`Mercedez Called`)
})(Car)()

let prm = new Promise((res, rej) => {
    setTimeout(() => res('codekul'), 1500)
    // connections for web sockets
}).then(resDt => {
    console.log('In then block ' + resDt)
    // data sent or receiving 
});

let mobile = /** iife */ (() => {
    return () => {
        let obj = {
            nm: 'Once Again',
            cost: 25
        }
        return obj;
    }
})()

let pc = (function () {
    return function () {
        return {
            nm: 'Another',
            cost: 52
        }
    }
})()

let docPrm = new Promise((res, rej) => {
    setTimeout(
        () => res({
            sts: 'success',
            op: 'insert'
        }),
        2000
    )
}).then(ob => {
    console.log(`1) Status ${ob.sts} Operation ${ob.op}`)
    
    setTimeout( () => {
        return ob;
    }, 2000);
}).then( ob => {
     console.log(`2) Status ${ob.sts} Operation ${ob.op}`)
});

/**
 *  java = kotlin,
 *  python = go,
 *  js = typescript
 */