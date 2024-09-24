console.log('functions')

// simple function
function hello(){ // function defination
    console.log('am from hello function');
}

hello(); //function call

// function with parameter

function add(num1, num2){
    let sum = num1 + num2;
    console.log(sum);
}
add(5, 15);

// function with return value 
// ====> if we did not return any value or any expression or something function return value should be undefined

function returnFunc(){
    return 'returning string from a function';
}

// console.log(returnFunc()); // log returned value 

let returnval = returnFunc();
console.log(returnval);

// CALL BACK AND HEIGHER ORDER FUNCTIONS 

// A function which is passed as an agrument in another function that is called call back function 

