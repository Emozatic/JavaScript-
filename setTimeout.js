//----------------SET TIMEOUT------------------

//taskn1:-

// console.log("start");

// setTimeout(()=>{
//     console.log("end")
// },2000);

// console.log("In between");

task2:-
// console.log("start");
// function greet(name){
//     console.log("Hello"+" "+ name);
// }

// setTimeout(()=>{
//     greet("Lucky");
// })

// console.log("Inside function");


//task3:-
console.log("start")
setTimeout(()=>{
    console.log("Loding Complete");
},3000)

//task4:-
function delayMessage(msg, time){
    setTimeout(()=>{
        console.log(msg)
    },time);
}

delayMessage("hello", 2000);

//task3:-
function downloadFile(){
    console.log("Downloading");
    setTimeout(()=>{
        console.log("Download Completed");
    },3000);
}

downloadFile()