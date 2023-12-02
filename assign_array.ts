//## Task 3:

//- **Scenario 1 - Modify Array with Methods:**
 
let pak = ["Punjab", "KPK", "Sindh", "Balochistan"];
let arr_length : number;

console.log("------------PUSH()--------------------")
pak.push("Riaz");
arr_length = pak.length;
for (let i = 0; i <= arr_length - 1; i++){
console.log(pak[i]);
}
console.log("------------POP()--------------------")
pak.pop();
arr_length = pak.length;
for (let i = 0; i <= arr_length - 1; i++){
console.log(pak[i]);
}
console.log("------------SHIFT()--------------------")
pak.shift();
arr_length = pak.length;
for (let i = 0; i <= arr_length - 1; i++){
console.log(pak[i]);
}
console.log("------------UNSHIFT()--------------------")
pak.unshift("Province");
arr_length = pak.length;
for (let i = 0; i <= arr_length - 1; i++){
console.log(pak[i]);
}

console.log("-------Scenario 2 - Subarray Creation:-------");
console.log('SPLICE');
let family = ["Mahrukh", "Maryam", "Muhammad", "Maheen"];
console.log("Original Array: " + family);

family.splice(2, 0, "Riaz", "Salma");
console.log("Adding two elements " + family);

let removed = family.splice(3, 1);  
console.log("After removing 1: " + family );  
console.log("removed is: " + removed);

console.log('SLICE');

let fruit = ["orange", "mango", "banana", "sugar", "tea"]; 
console.log("fruit.slice(0, 2): " + fruit.slice(0,2));
console.log("fruit.slice(1, 3): " + fruit.slice(1,3));