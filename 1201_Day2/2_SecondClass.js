/*const obj1={firstName: "Ashirwad", lastName: "Kushwaha", address: "UP"};
const firstName=obj1['firstName'];
const lastName=obj1['lastName'];

console.log(firstName,lastName);
// -----------------------------------------------

const{firstName:FName, lastName:LName}=obj1;
console.log(FName,LName);
// -----------------------------------------------

let ArrObj=[{firstName: "Ashirwad", lastName: "k"}, {firstName:"a", lastName:"k"}];
const[obj2, obj3]=ArrObj;
console.log(obj2.firstName,obj3.firstName);
// --------------------------------------------

let arrrObj={firstName:["a","b","c","d"], lastName:["k","l","a","r"]};
const[a,b,c,d]=arrrObj.firstName;
const[e,r,t,y]=arrrObj.lastName;
console.log(arrrObj.firstName,arrrObj.lastName);
// -----------------------------------------------------------------

const obj1 = { firstName: "Ashirwad", lastName: "Kushwaha", address: "UP" };
const obj2 = obj1;
obj2['firstName'] = "Aditya";
console.log(obj1);
console.log(obj2);
// -------------------------------------------------
*/

let obj3 = { ...obj1 }; //shallow copy
obj3['firstName'] = "Akash";
console.log(obj1);
console.log(obj2);
console.log(obj3);

/*
1.module
2.internal lib
3.npm install express
*/