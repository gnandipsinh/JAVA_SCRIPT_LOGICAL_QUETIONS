

const Factorial = (number) => {

    if(number < 0){
        return "Not define for negative number";
    }
    if(number === 0 || number === 1){
        return 1;
    }

    return number * Factorial(number - 1);
};

console.log(Factorial(5));


// using loop 




const Factorial2 = (num) =>{

    let result  = 1;

    for(let i=2;i<=num;i++){
        result *= i;
    }
    console.log(result);
}

Factorial2(5)