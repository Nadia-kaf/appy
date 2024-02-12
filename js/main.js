var firstName='Nadia ';//firstname is a word
var lastName = 'Kafui';
var age =18;//age is a number

let fullName = firstName + lastName;

let a = 55;
let b = 20; 

let result= `${a} + ${b} = ${a+b}`;
console.log(fullName); 
console.log(result);

let areYouHappy=true;





for (let i =1; i != 8;i++)
    console.log('The value of i is', i);

    //Functions are defined
    function isEligible(){
        if(age >= 18) console.log('welcome to xxx');
        else console.log('This page is not for you');
    }

    //invoking a function
    isEligible();