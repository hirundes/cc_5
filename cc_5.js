//Task 1 - Customer Profile           
    //Declared object customer with properties
let customer = {            
    name: "John Doe",
    age: 35,
    email: "john.doe@gmail.com"
} 
    //Logged each property with console.log and template literal
console.log("Task 1")       
console.log(`   Customer Name: ${customer.name}`);
console.log(`   Customer Age: ${customer.age}`);
console.log(`   Customer Email: ${customer.email}`);

//Task 2 - Order Details
    //Declared object order with properties 
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function() {
        console.log("Task 2")       //Logged the order details with this
        console.log(`   Order Id: ${this.orderId}`);
        console.log(`   Total Amount: ${this.totalAmount}`);
        console.log(`   Status: ${this.status}`);
    }
}
    //Call the method
order.displayOrder();

//Task 3 - Shopping Cart
    //Declared array cartItems
let cartItems = ["Lays", "Doritos", "Cheetos"];
    //Added Takis with .push() at the end
cartItems.push("Takis");
    //Removed the last item Takis with .pop()
cartItems.pop();
    //Added Fritos to the beginning with .unshift
cartItems.unshift("Fritos");
    //Removed the first item Fritos with .shift()
cartItems.shift();
    //Logged cartItems
console.log("Task 3");
console.log(cartItems);

//Task 4 - Price Adjustments
    //Declared array price
let price = [100, 200, 300];
    //Used .map to apply 10% discount to price
let discountPrice = price.map(price => price * 0.9)
    //logged "Task 4" and discountPrice
console.log("Task 4")
console.log(discountPrice)








