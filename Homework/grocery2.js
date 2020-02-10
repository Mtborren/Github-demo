let shoppingCart = { };  //empty shopping cart object.
let inventory = {       //inventory object
    milk: 10,
    eggs: 24,
    cheese: 20,
    bread: 25,
    lettuce: 15
};
let input = document.getElementById("userInput").value;

function addTo() {
    shoppingCart.push(input);
}

function viewCart() {
    alert(shoppingCart(input));
}