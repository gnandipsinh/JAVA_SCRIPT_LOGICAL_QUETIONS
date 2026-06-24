
const number = [1,2,3,4,5,74,8,5,5,454,45,5,];



const AlSamall = Math.min(...number);
console.log(AlSamall);


// using loop 

const FindTheSmall = (number)=>{

    if(number.length === 0){
        console.log("array is empty");
        return;
    }
    let smallNum = number[0];

    for(let i=1;i<number.length;i++){

        if(number[i] < smallNum){
            smallNum = number[i];
        }
    }

    console.log(smallNum);
}

FindTheSmall(number);



// using reeduce HOC

const smallNumN = number.reduce((a,c)=>{

    if(a,c){
        a = c;
    }

    return a;
});

console.log(smallNumN);