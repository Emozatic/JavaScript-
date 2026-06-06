//----------------CLOSURES------------------

function counter(){
    let count =0; 

    return function (){
        count++;
        console.log(count);
    }
}

let increament= counter();

increament();
increament();
increament();
increament();