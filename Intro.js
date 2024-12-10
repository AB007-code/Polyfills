//What is Prototype?
//Ans:- Prototype is a mechanism by which every Object inherit the Array Class object(properties and method) 
// prototype is Array Class function
// __proto__ is a Global Object Function
// ex. arr.push() this method is available in both Array Class and Global Object. But this can fastely inherit/access the Array Class Object.
///////////
// What is polyfills-----
// Polyfills is a piece of code where we can add the method or properties inside the prototype means update the older version browser to the lastest version browser.
// How can we add it?//
// i) Array.prototype.push = function(){
//
//  } // this will add inside the Array Class Object
// Prototype Chaining
// ii) Array.__proto__.__proto__.push = function(){ // first proto will access the Array Class and second proto will access the Object Class
//
//  }  // This push() will add inside the Global Object Class
// But recommended to add the prototype inside Array Class because of the inherit the nearby Class.This will be for faster execution.
let arr = [1,2,3,4]
console.log(arr)

////////////////
let obj = {
    name:"Abhilash",
    forEach(){
    console.log(this)
    }
}
// this keyword is the reference of the obj.