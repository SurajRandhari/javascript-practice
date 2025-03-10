//*Question 1 - Return only name of students in Capital

let students = [
    {name:"Piyush", rollNumber: 31, mark: 80},
    {name:"Jenny", rollNumber: 15, mark: 69},
    {name:"Kausal", rollNumber: 16, mark: 35},
    {name:"Dilpreet", rollNumber: 7, mark: 55},
]

//by for loop
let nameByLoop = []
for (let i = 0; i < students.length; i++) {
    nameByLoop.push(students[i].name.toUpperCase())
}
console.log(nameByLoop);


// by map
const Name = students.map((stu) => stu.name.toUpperCase())
console.log(Name);

