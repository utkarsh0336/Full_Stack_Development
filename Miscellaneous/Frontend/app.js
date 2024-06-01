// const stu1 = {
//     name : "Adam",
//     age : 25,
//     marks : 95, 
//     getMarks : function(){
//         return this.marks;
//     },
// };

// const stu2 = {
//     name : "Eve",
//     age : 21,
//     marks : 99, 
//     getMarks : function(){
//         return this.marks;
//     },
// };

// const stu3 = {
//     name : "Casey",
//     age : 24,
//     marks : 98, 
//     getMarks : function(){
//         return this.marks;
//     },
// };


// function Person(name,age){
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`Hi, My name is ${this.name}`);
//         }
//     };
//     return person;
// };



//Constructors -> It does not return anything and start with capital

// function Person(name,age){
//    this.name = name;
//    this.age = age;
// };
// Person.prototype.talk = function(){
//     console.log(`Hi, My name is ${this.name}`);
// }


// Using Class in JS

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, My name is ${this.name}`);
//     }
// }


// Inheritance
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi My name is ${this.name}`);
    }
}
class Student extends Person{
    constructor(name,age,marks){
        // this.name = name;
        // this.age = age;
        console.log("Student Class Constructor");
        super(name,age);
        this.marks = marks;
    }
    // talk(){
    //     console.log(`Hi My name is ${this.name}`);
    // }
}

class Teacher extends Person{
    constructor(name,age,subject){
        // this.name = name;
        // this.age = age;
        console.log("Teacher Class Constructor");
        super(name,age);
        this.subject = subject;
    }
    // talk(){
    //     console.log(`Hi My name is ${this.name}`);
    // }
}

let stud1 = new Student("adma",25,96);

// let p1 = new Person("adma",25);
// let p2 = new Person("eve",25); 