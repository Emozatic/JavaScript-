//variables
// let name= "Lucky";
// let age=21;
// let isStudent= true;

// console.log(`My name is ${name}. I am ${age} years old. I am Student=${isStudent}`)

let n1=21;
let n2= 21;
console.log(`addition is =${n1+n2}, subtraction is = ${n1-n2}, multiplication is =${n1*n2}, division is =${n1/n2}`);

let arr1= [12,23,45,22];
let arr2= [21,44,23];
console.log(...arr1, ...arr2)

let result= arr1.filter((values)=>{
   return values %2 ==0;
}).reduce((curr,acc)=>{
    return curr+acc;
},0)
console.log(result);

function greet(){
    setTimeout(()=>{
        console.log("Good Morning Ji");
    },4000);
}

greet();

let p1= new Promise((resolve,reject)=>{
    resolve ("Done")
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err);
})  