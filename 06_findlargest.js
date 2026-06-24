


let num1 = [1,2,33,4,55,6,77,8,97,10]   

const FInd =()=>{

    const max = Math.max(...num1);

    console.log("max number :",max);
}

FInd(num1);

// using HOC function

const MaxNum = num1.reduce((a,c)=>{

    if(a,c){
        a=c;

    }
    return c;

});

console.log("max number :",MaxNum);


// without method 


const FindLargestNum = (num1)=>{

    let largest = 0;


    for(let i=0;i<num1.length;i++){
        if(num1[i]>largest){
            largest = num1[i]
        }
    }

    console.log("largest number :",largest);
};

FindLargestNum(num1)
