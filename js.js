// // let radn=Math.random()
// // console.log(radn)


// // let floorNumber = Math.floor(Math.random() * 6)
// // console.log(floorNumber+1)

// function rollDice() {
//     return Math.floor(Math.random()*10)+2
// }
// // console.log(rollDice())
// // let nope = rollDice()
// // console.log(nope)
//  let object = {
//     name:"airbnb", //string
//     age:25,        //number
//     isHesheYoung:true, //boolean
//     hisFamily:["mouli","govindarao","Lakshmi","SudhaRani"], //array
//     sayHello : function(){
//         console.log("Mouli You can do it and say hi to me")
//     }
//  }
// console.log(object.name)
// console.log(object.hisFamily)
// object.sayHello()
// // console.log(objec[isHesheYoung])
// // console.log(objec[hisFamily])


// let person = {
//     name: "GovindaRao",
//     age:45,
//     country:"INDIA"

// }

// function logData() {
//     console.log(person.name+" is "+person.age+" years old and lives in "+person.country)
// }
// logData()

// let age=222
// if(age<6){
//     console.log("free")
// }else if(age>=6 && age<=17){
//     console.log("Child Discount")

// }else if(age>17 && age <=26){
//     console.log("student Discount")

// }else if(age>=27 && age<=66){
//     console.log("full price, No discount")
// }else{
//     console.log("senot citizen discount")

// }

// let largeCountries=["chaina","India","USA","Indonesia","Pakisthan","South Africa"]

// console.log("Six Largest Countries in the World")
// for(let i=0;i<largeCountries.length;i++){
//     console.log("-"+largeCountries[i])
// }

// let largeCountriess=["Naruto","India","USA","Indonesia","Pakisthan","Californiya"]
// largeCountriess.pop()
// largeCountriess.shift()

// largeCountriess.unshift("chaina")
// largeCountriess.push("SouthAfrica")

// console.log("Six Largest Countries in the World")
// for(let i=0;i<largeCountries.length;i++){
//     console.log("-"+largeCountriess[i])
// }

// // console.log(largeCountriess)
// let dayOfMonth = 13
// let weekday = "friday"

// if(dayOfMonth===1 && weekday==="friday"){
//     console.log("(⊙＿⊙')")
// }
// else{
//     console.log("Fuck")
// }

// let hands = ["rock","paper","scissor","pen","pancil","laptop"]
// let length=hands.length
// let randItemIndex=Math.floor(Math.random()*length)
// console.log(hands[randItemIndex])

// let fruits = ["🍎","🍌","🍎","🍌","🍎"]


// let appleEl=document.getElementById("apple-el")
// let bananEl=document.getElementById("banana-el")

// for(let i=0;i<fruits.length;i++){
//     if(fruits[i]==="🍎"){
//         appleEl.textContent+=fruits[i]
//     }else{
//         bananEl.textContent+=fruits[i]
//     }
// }


// button was clicked by onclick() funcrtion by using function name Save
// let inputBtn = document.getElementById("input-btn")
// function save() {
//     console.log("button Clicked")
// }
// save()

// button was clicked by addEventListener
// action from addEventListener



let myLeads = ["www.x-master.com",
"www.google.com",
"www.www.com",
"www.mouli.com",
,"www.mahi.com"]

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

for(let i=0;i<myLeads.length;i++){
    ulEl.textContent=(myLeads[i])
}

inputBtn.addEventListener("click",function (){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    // console.log("Button was clicked using addEventListener")
})



// window.alert("arrangement Finished")
// action from addEventListener
// let boxEl = document.getElementById("box")
// boxEl.addEventListener("click",function(){
//     console.log("I want to open the box")
// })
