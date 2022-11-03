let stud={
    rollno:101,
    Name :"Panda",
    Mark:99,
    Phonenumber:9876543210,
    Subjects:["Physics","Chemisry","Maths"],
    Guardian:{
        Name:"grizzly",
        Relation:"brother",
        Phonenumber:8970654321
    }
}
console.log(stud.Name);//to get the value of name
console.log(stud.Subjects[2]);//to get the maths from the array
console.log(stud.Guardian.Relation);
stud.rollno=102;//to replae rollnumber
console.log(stud);
console.log(stud["Phonenumber"]);//to get the phonenumber in another way
stud.Attendance="95%" ;//to add attendance of student
console.log(stud);
delete stud.Phonenumber;//to delete phonenumber of student
console.log(stud);
console.log(stud.hasOwnProperty("Mark"))//check the property is present or not
console.log(stud.hasOwnProperty("Phonenumber"))
