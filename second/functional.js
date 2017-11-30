let fun = () => {
    console.log('Functional Flow')
    return 20
}

function showDetails(callBack) {
    setTimeout(
        () => callBack(),
        1500
    )
}

showDetails(fun)

console.log(`Normal Flow ${fun()}`)

function fun2() {
    return function () {
        return `CodeKul`
    }
}

console.log(`${fun2()()}`)

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