class Car {

    constructor(nm, cost, city) {
        this.nm = nm
        this.cost = cost
        this.city = city
    }

    getCost() {
        console.log(this)
    }
}

let cr = new Car(`Mercedez`, 45, `Pune`)
cr.getCost()

console.log(this)

function myData() {
    console.log(this)
}

myData()
