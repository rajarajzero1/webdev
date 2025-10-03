console.log('This is Promise');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a < 0.5)  {
        reject("No random number was not supported")
    }
    else{

    setTimeout(() => {
        console.log("Yes i'am done")
        resolve("Harry")
    }, 3000);
    }
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a < 0.5)  {
        reject("No random number was not supported 2")
    }
    else{

    setTimeout(() => {
        console.log("Yes i'am done 2")
        resolve("Harry 2")
    }, 1000);
    }
})

                //all, race, any
let p3 = Promise.allSettled([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})

// prom1.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

