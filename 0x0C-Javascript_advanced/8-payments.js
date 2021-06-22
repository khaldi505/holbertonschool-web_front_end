function processPayment(amount){
    console.log("Collecting payment of %s", amount);
};

function processOrder(orderID, amount) {
    console.log("%s is being processed", orderID);
    processPayment(amount);
    console.log("%s has been fully processed", orderID);
}

console.log("Processing orders");
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log("All the orders have been processed")