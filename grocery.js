//Grocery Store app
//functions: - add to inventory - subtract from inventory - Notify when out of stock
//    data:
//    inventory:
//    inventory count:

//methods
//.push = // will be used to push item into shopping cart
//splice(,) = // will be used to subtract specific items from array
//alert() = // will be used to notify when item inventory has reached zero.

var shoppingCart = []
var inventory = [
        "milk",
        "eggs",
        "cheese",
        "bread",
        "lettuce"
    ];

let quantity = [1, 24, 20, 25, 15];

let milkInv = 1
let eggsInv = 24
let cheeseInv = 20
let breadInv = 25
let lettInv = 15

let input = userInput

function addTo() {
    let input = document.getElementById("userInput").value;
    if(inventory.includes(input)) {
        shoppingCart.push(input);
        alert("Item Added to Cart.")
        let index = inventory.indexOf(input);
        if(quantity[index] > 0) {
            quantity[index] -= 1;
        } else {
            prompt("We're Sorry! This item is no longer available. Please enter your E-Mail address to be notified when it comes back in stock.")
        }
        // add to shopping cart && decrement qty array
    } else {
        alert("Item not in inventory, please enter valid item.");
        // add to NEW item to inventory array prompt user for initial qty and then push qty on to qty array 
    }
}

// function takeAway() {
//     let input = document.getElementById("userInput").value;
//     if(shoppingCart.includes(input)) {
//         shoppingCart.splice(input, 1);
//         alert("Item Has Been Removed.");
//         let index = shoppingCart.indexOf(input);
//         if(quantity[index] >= 0) {
//             quantity[index] += 1;
//         }
//     }
// }

//works but takes wrong item out of shopping list

function takeAway() {
    let input = document.getElementById("userInput").value;
    if(shoppingCart.includes(input)) {
        shoppingCart.findIndex(input);
        alert("Item Has Been Removed.");
        let index = shoppingCart.indexOf(input);
        if(shoppingCart[index] >= 1) {
            shoppingCart[index] -= 1;
            quantity[index] += 1;
        }
    }
}







function viewCart() {
    alert(shoppingCart);

}
