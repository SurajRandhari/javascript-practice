let students = [
    {name:"Piyush", rollNumber: 31, mark: 80},
    {name:"Jenny", rollNumber: 15, mark: 69},
    {name:"Kausal", rollNumber: 16, mark: 35},
    {name:"Dilpreet", rollNumber: 7, mark: 55},
]

//*Question 5 - Return only name of students who scored more than 60

const names = students.filter((stu) => stu.mark > 60).map((stu) => stu.name )
console.log(names);

//*Question 5 - Return total marks for students with marks greater than 60 after 20 marks have added to those who scored less than 60

const finalMark = students.map((stu) => {
    if (stu.mark < 60) {
        stu.mark += 20
    }
    return stu
}).filter((stu) => stu.mark > 60).reduce((acc, cur) => acc + cur.mark , 0)

console.log(finalMark);
