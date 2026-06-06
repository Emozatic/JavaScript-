//--------------------CALLBACKS-----------------------

function greet(name){
    console.log("Hello" + name);
}
function name(callback){
    callback("Lucky");
}
name(greet);

//Mini project

function success(){
    console.log("you are verified");
}

function failure(){
    console.log("you are not verified");
}

function check(success,failure,password){
    password===1234 ? success() : failure();
}

check(success,failure,1234);