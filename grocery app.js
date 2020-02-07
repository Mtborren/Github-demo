let shoppingCart = {};  //empty shopping cart object.
let inventory = {       //inventory object
    milk : 10,
    eggs : 24,
    cheese : 20,
    bread : 25,
    lettuce : 15
};
// let input = userInput //may not need to define here.

// function addTo() {
//     let input = document.getElementById("userInput").value;
//     if(inventory.includes(input) && inventory[index] > 0){
//         shoppingCart.push(input);
//         alert("Item Added to Cart.");
//         if(inventory[index] >= 1){
//             inventory[index] -= 1;
//         } else {
//             prompt("We're Sorry! This item is no longer available. Please enter your E-Mail address to be notified when it comes back in stock.")
//         }
//     } else {
//         alert("Item is not in inventory, please enter a valid item.")
//     }
// }

// function takeAway() {
//     let input = document.getElementById("userInput").value;
//     if(inventory.includes(input)){
//         let index = inventory.indexOf(input);
//         inventory.splice(index, 1);
//         inventory[index] += 1;
//         alert("Item has been removed.");
//     } else {
//         alert("Item is not in shopping cart, please reselect.";)
//     }
// }

function viewCart() {
    alert(shoppingCart);
}

//This function works as expected, however it gets broken when the other functions are enabled.