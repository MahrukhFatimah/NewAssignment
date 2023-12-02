import { reverse } from "dns";

console.log("bismillah hir rahman nir raheem")

import inquirer from "inquirer";

// Task 2:
// **Scenario 1: Sum numbers**

function add(num1: number, num2 :number){

console.log ("The sum of two numbers is " + (num1 + num2));
}

let n1 = await inquirer.prompt([{
    name: "numm",
    type: "number",
    message: "Enter First Number:"}
]);

let n2 = await inquirer.prompt([{
    name: "numm1",
    type: "number",
    message: "Enter Second Number:"}
]);

add(n1.numm,n2.numm1) //calling function


//Scenario 2: Check Even or Odd

 function checkEvenOrOdd(p_num : number){
    let result : number;
     result = (p_num % 2);

     if (result == 0) {
        console.log("The number is Even");
     } else{
        console.log("The number is Odd");
     }    
 }
 let n3 = await inquirer.prompt([{
    name: "num3",
    type: "number",
    message: "Enter number to check Odd/Even:"}
]);

 checkEvenOrOdd(n3.num3);

 // Scenario 3: Calculate Area:

 function calculateArea (p_len : number, p_width : number){

    let rec_area : number;
    rec_area = p_len * p_width;

    console.log(`The area of a rectangle is ${rec_area}`)
 }
 calculateArea(6,4)
 
//Scenario 4: String Reversal
function reverseString (p_str : string){

    let reversedStr = "";
for (let i = p_str.length - 1; i >= 0; i--) {
    reversedStr += p_str[i];
}
console.log(reversedStr);
}

reverseString('Riaz');

//Scenario 5: Temperature Conversion:
function convertCelsiusToFahrenheit(p_temp : number){
let temp : number = 0;

temp = (p_temp * 9/5) + 32;
console.log(temp + " F");
}

convertCelsiusToFahrenheit(12);