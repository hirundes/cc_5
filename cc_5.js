//Task 1 - Customer Profile           
    //Declared object customer with properties
let customer = {            
    name: "John Doe",
    age: 35,
    email: "john.doe@gmail.com"
} 
    //Logged each property with console.log and template literal
console.log("Task 1")       
console.log(`   Customer Name: ${customer.name}`)
console.log(`   Customer Age: ${customer.age}`)
console.log(`   Customer Email: ${customer.email}`)

//Task 2 - Order Details
    //Declared object order with properties 
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function() {
        console.log("Task 2")       //Logged the order details with this
        console.log(`   Order Id: ${this.orderId}`)
        console.log(`   Total Amount: ${this.totalAmount}`)
        console.log(`   Status: ${this.status}`)
    }
}
    //Call the method
order.displayOrder();

