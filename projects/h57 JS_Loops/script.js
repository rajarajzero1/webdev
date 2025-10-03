console.log("I'am a tutorial on Loops")

let a = 1;
console.log(a)
console.log(a+1)
console.log(a+2)

for (let i = 0; i < 100; i++){
    console.log(a + i);
}

let obj = {
    name: "Raj",
    role: "Porgrammer",
    company: "R-revo"
}

for (const key in obj) {
    // const element = obj[key];
    // console.log()
    console.log(key)
}

// for of 

for (const c of "Rajkumar") {
    console.log(c)
}

// let i = 5;
// while (i<6) {
//     console.log(i)
//     i++;
// }

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);