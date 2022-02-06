const gridBoxes = document.querySelectorAll('.calendar-box');
const dates = [24, 5, 4, 3, 9, 1, 23, 21, 15, 16, 2, 17, 11, 8, 19, 6, 22, 7, 10, 20, 12, 18, 14, 13];

const prizeObject = {
    "data": [
        {
            "id" : 24,
            "name" : "24th",
            "type" : "Date",
            "attributes" : {
                "color" : "red"
            },
        },
        {
            "id" : 5,
            "name" : "Day 5",
            "type" : "Date",
            "attributes" : {
                "color" : "blue"
            },
        },
        {
            "id" : 4,
            "name" : "4th",
            "type" : "Date",
            "attributes" : {
                "color" : "red"
            },
        },
    ]
}

gridBoxes.forEach((currentBox, i)=>{
    currentBox.innerText=dates[i];
    currentBox.classList.add("class"+dates[i]);
    prizeObject.data.forEach((currentPrize)=>{
        if(currentPrize.id===dates[i]){
            console.log(currentPrize.id);
            currentBox.addEventListener('click',()=>{
            currentBox.classList.toggle("calendar-box-toggle");
            })
        }
    })
})



