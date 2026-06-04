//------------------FUNCTIONS-------------------


function add(a,b){
    return a+b;
}

console.log(add(2,3));

//functions with parameters
function greet(name){
    console.log(`namaste ${name}`);
}

greet("Lucky");

//task 1:-

function checkEven(num){
    return num%2==0 ? true : false;
}

console.log(checkEven(4));
console.log(checkEven(5));


//task 2:-

function table(num){
    for(let i=1; i<=10; i++){
        console.log(`${num}*${i}=${num*i}`);
    }
}


//mini project

function calator(a,b){
    console.log(a+b);
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}

calator(10,5)