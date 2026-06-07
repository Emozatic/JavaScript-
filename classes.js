//---------------CLASSES------------------

// class Student{
//     constructor(name,age){
//         this.name= name
//         this.age=age
//     }

// }

// let s1= new Student("Lucky",121)
// console.log(s1.name);

//task 1
 class Person{
    constructor(name,age){
        this.name= name;
        this.age= age;
    }

    intro(){
        console.log(`My name is ${this.name}`);
    }
 }

 let p1= new Person("Lucky",21);
p1.intro();

//------------------INHERITENCE------------------

class Father{
    constructor(name,age){
        this.name=name;
        this.age= age;
    }
    greet(){
        console.log("Good Morning");
    }
}

class Son extends Father{
    constructor(name,age){
        super(name,age);
        this.name= name;
    }
}
let f1= new Father("Lucky",21);
let son1 = new Son();
console.log(f1.name);
console.log(son1.name);