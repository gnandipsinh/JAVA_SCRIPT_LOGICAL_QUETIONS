

const fruits = ["apple","cherry","water malon"];

console.log(fruits);

const removeItem = fruits.shift();

console.log(fruits);


// use loop 

const fruist2 = ["mango","water melon","apple"];

const reemoveFirstElement = (fruist2)=>{

    const newArr = [];


    for(let i=1;i<fruist2.length;i++){
        newArr.push(fruist2[i])
    }

    console.log(newArr);
};

reemoveFirstElement(fruist2);


// slice method 


const fruist3 = ["apple","cherry","water melon"];

const remaFruits = fruist3.slice(1);

console.log(remaFruits);