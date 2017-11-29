let fn = function () {
    return `Ubuntu`
}

fn()
console.log(`Output of fn is ${fn()}`)

let fn1 = () => `ubuntu` // lambda or fat-arrows

console.log(`Output of fn1 is ${fn1()}`)

let fn2 = (num1, num2) => {
    let swp = num1
    num1 = num2
    num2 = swp
    return `Swiped Nums are ${num1} and ${num2}`
}

console.log(`Output of fn2 is ${fn2(15, 60)}`)