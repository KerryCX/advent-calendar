const fruit = [];

fruit[0]="mango";
fruit[1]="orange";
fruit[2]="apple";
fruit[3]="stawberry";

const header = document.querySelector(".header-container");
const pTags = document.querySelectorAll('p');

//the following for loop is the same as
for (let i = 0; i < fruit.length; i++){
    pTags[i].innerText=fruit[i];
}
//this forEach:
fruit.forEach((currentFruit,i)=>{
    pTags[i].innerText=currentFruit;
})

pTags.forEach((currentTag,i)=>{
    console.log(currentTag.innerText);
})

header.addEventListener('click',()=>{
    header.innerText="Welcome!";
})

const button = document.querySelector("button");
button.addEventListener('click',()=>{
    let todaysDate = Date();
    header.innerText="Everyone! Today's date is: "+todaysDate;
    header.classList.toggle("header-toggle");
})
/*
console.log(Date())

let me = 'Sun Feb 01 2022 19:25:22 GMT+0000 (Greenwich Mean Time)';
console.log(me);
*/