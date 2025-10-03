let students = ["shubh", "anjli", "Shivani", "Shivangi", "Annapurna",
    "Shubham", "Krishnanedu", "Ravindranathan", "Shivesh", "kaif", "Emanuel"]

    let houses = []

    for (const student of students) {
        if(student.length < 6){
            houses.push("Gryffindor")
        } 
        else if(student.length < 8){
            houses.push("Huffilepuff")
        }
        else if(student.length < 12){
            houses.push("Slytherin")
        }
    }

    console.log(houses)