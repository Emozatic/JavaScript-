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
    if(password===1234){
        success();
    }
    else{
        failure();
    }
}

check(success,failure,124);