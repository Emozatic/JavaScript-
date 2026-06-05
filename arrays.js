// //------------Arrays-----------------

// //task 1:-
// let arr=[1,2,3,4];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
//     sum+=arr[i];
// }
// console.log(`sum  = ${sum}`);

// let arr2= [30,65,12,89];
// let smallest= arr2[0];

// for(let i=0; i<arr2.length; i++){
//     if(arr2[i]<smallest){
//         smallest=arr2[i];
//     }
// }
// console.log(`smallest = ${smallest}`);


// //map task 3:-

// let arr3= [1,2,3,4];
// let result1= arr3.map((values)=>{
//     return values*values;
// })
// console.log(result1);

// //filter task 4:-

// let arr4= [5,12,18,7,20];
// let result2= arr4.filter((values)=>{
//     return values>10;
// })
// console.log(result2);

// //reduce

// let arr5= [1,2,3,4];

// let result = arr5.reduce((acc,curr)=>{
//     return   acc+curr
// },0)
// console.log(result);

// //filter
// let arr6=[1,2,3,4,5,6,7,8];
// let result11 = arr6.filter((value)=>{
//     return value%2==0;
// })
// console.log(result11);

let arr7= [33,33,5645,98,2];
let result12= arr7.filter((values)=>{
    return values%2==0;
}).reduce((curr,acc)=>{
    return curr+acc;
},0)

console.log(result12)
