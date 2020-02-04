//Grocery Store app
//functions: - add to inventory - subtract from inventory - Notify when out of stock
//    data:
//    inventory:
//    inventory count:

//methods
//.push = // will be used to push item into shopping cart.
//splice(,) = // will be used to subtract specific items from array
    //update* actually used .indexOf to locate index of specific item in array.
//alert() && prompt()= // will be used to notify when item inventory has reached zero.

var shoppingCart = []
var inventory = [
        "milk",
        "eggs",
        "cheese",
        "bread",
        "lettuce"
    ];

let quantity = [2, 24, 20, 25, 15];
//used to represent actual count of product inventory
let milkInv = 2
let eggsInv = 24
let cheeseInv = 20
let breadInv = 25
let lettInv = 15
//used to represent which which item is being counted in quantity array
let input = userInput


function addTo() {
    let input = document.getElementById("userInput").value;
    let index = inventory.indexOf(input)
    if(inventory.includes(input) && quantity[index] > 0) {
        shoppingCart.push(input);
        alert("Item Added to Cart.")
        let index = inventory.indexOf(input); 
        if(quantity[index] >= 1) {
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


function takeAway() {
    let input = document.getElementById("userInput").value;
    if(shoppingCart.includes(input)) {
        shoppingCart.indexOf(input);
        let index = shoppingCart.indexOf(input);
        shoppingCart.splice(index, 1);
        let amount = inventory.indexOf(input);
        quantity[amount] += 1;
        alert("Item Has Been Removed.");
    } else {
        alert("Item Not in Shopping Cart, Please Reselect.");
    }
}

function viewCart() {
    alert(shoppingCart);
}


//IT WORKS!!!!