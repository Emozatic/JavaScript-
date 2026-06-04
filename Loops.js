//-------------LOOPS------------

//task 1:=-

for(let i=0; i<100; i++){
    console.log(i);
}

//task 2:-

for(let i=10; i>=1; i--){
    console.log(i)
}

//task 3:-

for(let i=1; i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}

//task 4:-

for(let i=1; i<=10; i++){
    if(i%2!=0){
        console.log(i);
    }
}

//task table generator:-

let num=5;
for(let i=1; i<=10; i++){
    console.log(`${num}*${i}=${num*i}`)
}

//task 5:-

for(let i=100; i>=1; i--){
    if(i%10===0){
        console.log(i)
    }
}

//task 6:-
let factNum=5;
let fact=1;
for(let i=1; i<=num; i++){
    fact=fact*i;
}
console.log(fact);