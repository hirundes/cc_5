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
let discountedPrice = price.map(price => price * 0.9)
    //logged "Task 4" and discountedPrice
console.log("Task 4");
console.log(discountedPrice);

//Task 5 - Product Availability
    //Declared array inventory
let inventory = [15, 0, 4, 0, 6];
    //Used .filter to filter out zero stock
let filteredInventory = inventory.filter(inventory => inventory > 0);
    //Logged "Task 5" and filtered inventory
console.log("Task 5");
console.log(filteredInventory);

//Task 6 - Revenue Calculation
    //Declared array sales
let sales = [500, 300, 200, 400];
    //Used .reduce to calculate total revenue
let totalRevenue = sales.reduce((total, sale) => total + sale, 0);
    //Logged "Task 6" and totalRevenue
console.log("Task 6")
console.log(totalRevenue);

//Task 7 - Customer Search
    //Declared array customers
let customers = ["Alice", "Bob", "Charlie", "David"];
    //Used .find to locate Charlie
let found = customers.find(customer => customer === "Charlie");
    //Logged "Task 7" and found
console.log(found);
    //Used .find to locate "Charlie" 

//Task 8 - Tax Calculation
    //Declared function calculateTax
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
    //Defining amount, tax rate
let amount = 100 
let taxRate = 0.10
    //Defining taxAmount w/calculateTax
let taxAmount = calculateTax(amount, taxRate); 
    //Logged "Task 8" and Tax Amount with a template literal
console.log("Task 8")
console.log(`   Tax Amount: $${taxAmount}`);

//Task 9 - Discount Application
    //Declared a function expression applyDiscount
let applyDiscount = function(prices, discount) {
    return prices * 0.10
};
    //Logged "Task 9" and Discounted Price
console.log("Task 9");
console.log("   Discounted Price", applyDiscount(500)); 

//Task 10 - Loyalty Points
    //Arrow function calculatePoints
const calculatePoints = (purchaseAmount) =>  purchaseAmount * 0.1
let saleAmount = 100
let Points = calculatePoints(saleAmount);
    //Logged "Task 10" and Points Returned
console.log("Task 10");
console.log("   Points Returned:", Points);
