 //Map() 

 let arr = [1, 13, 5, 7, 11];
/* let newArr = []

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)   
} */

//easy method

let newArr = arr.map((e)=>{
    return e**2
})

console.log(newArr)

//filter()
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))


//reduce method -> Reduce an array to a signle value

let arr2 = [1, 2, 3, 4, 5, 6]

const red = (a, b)=>{
    return a*b
    //return a+b
}

console.log(arr2.reduce(red))

//Array.from

// Array.form("Rajkumar")

