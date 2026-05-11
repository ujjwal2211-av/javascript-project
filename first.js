// const profile = {               
//     Username : "ujjwal kumawat",
//      isFollow : true ,
//      followers : 567895,
//      following :5,
//      age:21, 

// };
//  profile["Username"] ="AVAL" ;
//  console.log(profile);
//arithmatic operator
// let a=5; // = assignment operaror
// let b =4;
/*
console.log("a=",a,"& b=",b);
console.log("a+b=" , a+b);
console.log("a-b=" , a-b);
console.log("a*b=" , a*b);
console.log("a/b=" , a/b);
console.log("a%b=" , a%b);
console.log("a ** b=" , a ** b);
console.log("++a", ++a);
console.log("a = " , a);
console.log("a++", a++);
console.log("a = " , a); */

// //Assignment opperator
// a -= 5;
// console.log("a =",a);
// a += 5;
// console.log("a =",a);
// a *= 5;
// console.log("a =",a);

// a /= 5;
// console.log("a =",a);

//comparision operator 
// let d =4;
// let c =5;
//   console.log("c !== d", c !== d);
// console.log("d < c", d<);


//prime number or odd
// let num = 25;
// if (num % 2 === 0)
// {
//     console.log(num,"is even");
// } 
// else {  
//     console.log(num,"is odd");
// }  

//else if

/*let mode="dark";
let b;
if(mode === "dark")
{
    b="black";
}
else if(mode === "light")
{
    b="blue";
}
else if(mode === "pink")
{
    b="pink";
}
else {
    b="excellent"
}
console.log(b);*/

// let num = prompt("enter a number:");

// if(num % 5 === 0 )
// {
//     console.log(num,"is multiple of 5");
// }
// else
// {
//     console.log(num,"is not multiple of 5");
// }

// let score = prompt("enter yours marks");
// let grade;

// if(score >= 90 && score <= 100){
//     grade="A";
// }
// else if(score >= 70 && score <= 89){
//     grade="B";
// }
// else if(score >= 60 && score <= 69){
//     grade="C";
// }
// else if(score >= 50 && score <= 59){
//     grade="D";
// }
// else if(score >= 0 && score <= 49){
// grade="F";
// }
// console.log("According to your score, your grade was :", grade );

// let a ="ujjwal"
// {
//     let a= "this"
//     console.log(a)
// };

// console.log(a);

// var a ="ujjwal"
// {
// var  a= "this"
//     console.log(a)
// };

// console.log(a)
// const a ="ujj";
// const b = 7;
// console.log(a+b);
// console.log(typeof (a+b));

// const a ={
//     Username : "ujjwal kumawat",
//    isFollow : true ,
//    followers : 567895,   
//    following :5,
//     age:21,
// };
// console.log(a)
// a.followers=123;
// console.log(a)
// a["following"]=5;
// console.log(a)
// a["age"]=a["age"] +2;
// console.log(a)
// a['friend']="krishna"
// console.log(a)

// const dict ={
//     appreciate:"motivate kkarna" ,
//     happy: "khush hona",
//     sad:"dukhi hona"
// };
// console.log(dict.sad);
// console.log(dict['happy']);

//looping over an array
// // iterals(string,objects,arrays) means in which i can add loops 
// for(let i =0;i<marks.length;i++){
//         console.log(marks)}
// let marks=[45,55,65,32,18,46] ;
// let sum = 0;
//         for(let val of marks){
    
//     sum += val; 
// }
// let average= sum/marks.length
// console.log(`average of the sum is ${average}`)

 let items =[200,300,500,400,600];
// let i=0;
//  for(let val of items){
//     let offer = val/10;
//     items[i] -= offer;
//     console.log(items[i]);
//     i++;
//  }

//  for(let i=0;i<items.length;i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
//     console.log(items[i]);}

// for each method 
//     let arr=[1,2,3,4,5]
//     arr.forEach((val)=>{
//     console.log(val)
// })

// const calSquare=(val)=>{
//     console.log(val*val)
// };
// arr.forEach(calSquare); // () we have to pass function in the call back // oe can pass variable to see discription 

// map method
// let users = [
//     {name:"Ujjwal", age:21},
//     {name:"Rahul", age:20}
// ];

// let names = users.map((user)=>{
//     return user.name;
// });

// console.log(names);

// filter array method 
// let evenArr=items.filter((val)=>{
// return val % 3 === 0;
// })
// console.log(evenArr)

// reduce method , perform operation and reduces the array to a single operation
// let output=items.reduce((previous , curr)=>{
//     // return previous + curr;
//     return previous > curr ? previous : curr;
// })
// console.log(output)

// DOM allows JS to:

// access elements
// change text
// handle clicks
// create elements
// remove elements
// build dynamic UI

// window object represent an open window in a browser , its a browser object not a javascript object & is automatically created by the browser , it is a global object with lots os properties and methods, 
// console.dir (special object -> documnet -> property or methods ko print karwane ke kaam aata hai )
// console .log (specially dom element ko print kartaa hai like h1 , p,  button etc ) not for object
/* html ko java script mai access kar sakte hai in windows object mai ek or object hote hai document name se umsai and this documenet is modal (DOM)
  it gives tree like structure and each box is know as node */

  // to do dynamically changes we use the dom . run time changes
//   document.body.childNodes[3].innerHTML="ramu kaka" 
//   console.dir(document.body);
//   document.body.childNodes[5].style.background="yellow"
// if we write script tag in head section that dom element is not accessible in the code
  // DOM manipulation

//   let button =document.getElementById("myid"); // when there is no id present in the code  then it shows null 
//      console.dir(button);

//      let head = document.getElementsByClassName("hero") // if class name mismatch then it will open empty 

// console.log(head)
// console.dir(head)

// query selector return node list 
// document.querySelector("p") // to print first list .
// document.querySelectorAll("p") // to access multiple tag
// document.querySelectorAll(".hero") // to access multiple class use of . is mandatory
// document.querySelector("#myid") // to access id use of # is mandatory
// document.querySelector("div").firstChild // to see the first child of the div
// document.querySelector("div").lastChild // to see the last child of the div

// property

// .tagName is used to return tags of the element node
// .innertext : return the text content of the element and all its children 
// .innerHTML : return the HTML content of the element or plain text and all its children 
// .textContent : return textual content even for hidden element
// header.innerHTML ="namaste ujjwal"// set to do change in the text 
// header.innerHTML ="<i>namaste ujjwal</i>"// set 
 
// let h3=document.querySelector("h3");
// console.dir(h3.innerText);

// h3.innerText=h3.innerText + " kese ho sab";
// let h2=document.querySelector("h2");
// h2.style.backgroundColor="orange"// change bgcolor without touchung css
// console.log(h2.setAttribute("class","newClass"));// setAttribute change old class to new class
// let name=h2.getAttribute("class")
// // let name = (p.getAttribute("p"))

//  console.log(name)
//inser element (first create and then add)
//  let newBtn =document.createElement("button")
//  newBtn.innerText="click this ";
//  console.dir(newBtn)

//  let ul =document.querySelector("ul")
//  div.append(newBtn) // inside div but at last .
//   div.prepend(newBtn) // inside div but at start.
//  div.before(newBtn) // outside div but at start.
//  div.after(newBtn) // outside div but at last .
//  div.appendChild()
// let newItem=document.createElement("li");
// newItem.innerText="items5"
// ul.appendChild(newItem)
// ul.removeChild(newItem)

let newButton =document.createElement("button")
newButton.innerText="click me!" 
newButton.style.color="white"
newButton.style.backgroundColor="red"

console.dir(newButton)
document.querySelector("body").prepend(newButton)

let para=document.querySelector("p")
// console.dir(para)