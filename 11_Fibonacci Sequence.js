

const printA = (num)=>{

    let num1 = 0 ;
    let num2 = 1;
    let next;


    for(let i=1;i<num;i++){
        console.log("Current Number :",num1);

        next = num1 + num2;

        num1 = num2;

        num2 = next;

    }
};

printA(15);