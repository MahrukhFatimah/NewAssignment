let fruits = ["Apple ",200, "orange" ,120, "banana", 100, "Graps ", 300];
let vegetable = ["Carrot", "Onion", "Potato", "Spinach"];
let groceries = ["Oils", "Rice", "Pasta", "Eggs"];

import inquirer from "inquirer";
let checkcondition = await inquirer.prompt([{
    name: "fruit_veg",
    type: "string",
    message: "What you want to purchase fruit/vegetable:"}
]);

console.log(checkcondition.fruit_veg);
if (checkcondition.fruit_veg == 'fruit'){
    const total_bill : number = 200; //e.g. if customer select apple
    console.log(fruits);
    console.log(`The total bill of ${fruits[0]} is ${fruits[1]}`)
}else if (checkcondition.fruit_veg == 'vegetable'){
    console.log(vegetable);
} else {
    console.log("This option is not available")
}