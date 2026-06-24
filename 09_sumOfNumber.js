


const number = [10,20,30,40,50,60,70];

const total =(number)=>{


    let sum = 0;

    for(let i=0;i<number.length;i++){
        sum+=number[i];

    }
    console.log(sum);
}

total(number);





const sum = number.reduce((a,c)=>{
    a+=c;
    return a;
})

console.log(sum);


// . using for of loop


const sumFind =  (number) =>{

    let sum = 0;

    for (let i of number){
        sum +=i;
    }

    console.log(sum);
}

sumFind(number);