//------------------PROMISES-------------------

// let p =new Promise((resolve,reject)=>{
//     resolve("done")
// })
// p.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err);
// })


//task1:-
// let p1= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("file downloaded");
//     },3000)
// })

// p1.then((data)=>{
//     console.log(data);
// })

// let userData= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({name:"Lucky", age:20});
//     }, 2000);
// })

// async function main(){
//     let result = await userData;
//     console.log(result);
// }
// main();


//task 3:-
// let p2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Network Error");
//     },2000);
// });

// async function test(){
//     try{
//         let result = await p2;
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// test();

let arr1=[10,20,30,40];

let result=arr1.forEach((values)=>{
    console.log(values);
})
