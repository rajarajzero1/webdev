// 1
function nice(name) {
console.log("Hey " + name +" you are nice!")
console.log("Hey " + name +" you are good!")
console.log("Hey " + name +" your tshirt is nice!")
console.log("Hey " + name +" your course is goot too!")
}

nice("Rohan")
nice("Rohit")


// 2
// function sum(a,b)   {
//     console.log(a + b)
// }

// sum(3, 5)


// 3
// function sum(a,b)   {
//     // console.log(a + b)
//     return a + b
// }

// result = sum(5, 5)

// console.log("The sum of these numbers is: ", result)



// 4
// function sum(a, b){
//     return a + b
// }

// result1 = sum(3, 5)
// result2 = sum(7, 5)
// result3 = sum(3, 103)

// console.log("The sum of these numbers is: ", result1)
// console.log("The sum of these numbers is: ", result2)
// console.log("The sum of these numbers is: ", result3)


// 5
function sum(a, b, c = 3){
    return a + b + c
}

result1 = sum(3, 5)
result2 = sum(7, 5)
result3 = sum(3, 103)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


// 6

const func1 = (x)=>{
    console.log("I'am an arrow function", x)
}

func1(34);
func1(66);
func1(84);