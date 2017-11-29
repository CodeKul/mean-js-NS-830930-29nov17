let arr = [
    `Android`,
    `Apple`,
    `Rim`,
    `Symbian`,
    `Windows`,
    `Bada`,
    `Tizesn`,
    `RTOS`
];

for (let i = 0; i < arr.length; i++) {
    console.log(`${i} => ${arr[i]}`)
}

arr.forEach((el, ind) => console.log(`${ind} => ${el}`))