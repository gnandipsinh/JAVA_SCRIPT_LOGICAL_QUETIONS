




    const PrimeNumber = (num)=>{

        if(num <= 1){
            return console.log(num," is not prime number");
        }

        for(let i=2;i<num;i++){

            if(num % i === 0){
                return console.log(num," is not prime number")
            }

        }

        return console.log(num," is prime number ")
    };      

    PrimeNumber(6);