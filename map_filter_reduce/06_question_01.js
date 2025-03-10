let students = [
    {name:"Piyush", rollNumber: 31, mark: 80},
    {name:"Jenny", rollNumber: 15, mark: 69},
    {name:"Kausal", rollNumber: 16, mark: 35},
    {name:"Dilpreet", rollNumber: 7, mark: 55},
]

//*Question 1 - Return only name of students in Capital

//by for loop
let nameByLoop = []
for (let i = 0; i < students.length; i++) {
    nameByLoop.push(students[i].name.toUpperCase())
}
// console.log(nameByLoop);


// by map
const Name = students.map((stu) => stu.name.toUpperCase())
// console.log(Name);


//*Question 2 - Return only details of those who scored more than 60 marks


// with For Loop
let markMorethan60 = []
for (let i = 0; i < students.length; i++) {
    if (students[i].mark > 60) {
        markMorethan60.push(students[i])
    }
}
// console.log(markMorethan60);

// using Filter
const studentMarkAbove60 = students.filter((stu) => stu.mark > 60)
// console.log(studentMarkAbove60);

//*Question 3 - Return only details of those who scored more than 60 marks and rollNumber greater than 15

const studentMarkAbove60b = students.filter((stu) => stu.mark > 60 && stu.rollNumber >15)
// console.log(studentMarkAbove60b);

//*Question 4 - Sum of marks of all students

const sumOfStud = students.reduce((acc, cur) => acc + cur.mark , 0)
console.log(sumOfStud);

