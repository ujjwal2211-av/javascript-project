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
let users = [
    {name:"Ujjwal", age:21},
    {name:"Rahul", age:20}
];

let names = users.map((user)=>{
    return user.name;
});

console.log(names);

// filter array method 
let evenArr=items.filter((val)=>{
return val % 3 === 0;
})
console.log(evenArr)

// reduce method , perform operation and reduces the array to a single operation
let output=items.reduce((previous , curr)=>{
    // return previous + curr;
    return previous > curr ? previous : curr;
})
console.log(output)

// DOM allows JS to:

// access elements
// change text
// handle clicks
// create elements
// remove elements
// build dynamic UI