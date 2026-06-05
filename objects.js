//---------------OBJECTS---------------------

//task 1
let book={
    title:"Khishitiz",
    author:"Prem Chand",
    price:80
};

console.log(book.title);

//task 2:-
let person={
    name:"Lucky",
}

person.city="Kalka";
console.log(person.city);

//task 3:-
let students=[
    {
        name:"Lucky",
        marks:90,
    },
    {
        name:"Ravi",
        marks:90,
    },
    {
        name:"Vikas",
        marks:100,
    }
]

for(let i=0; i<students.length;i++){
    console.log(students[i].name);
}

//task 4:-

let stu= {
    name:"Lucky",
    marks:90
}

let {name,marks}= stu;
console.log(name + marks);

//task 5:-

let arr1= [1,2];
let arr2= [...arr1, 3,4];
console.log(arr2);