class burgerDelivery{
    static totalorders = 0
    static availableBurgers= 10
    constructor(meal, price){
        this.meal= meal;
        this.price= price;
        burgerDelivery.totalorders++
    
    }

    //static//
    static orderSlots (){
        if (burgerDelivery.availableBurgers > 0 ){
            burgerDelivery.availableBurgers--;
            console.log(`Order taken! There are now ${burgerDelivery.availableBurgers} slots remaining!`)
        } else {
            console.log("Sorry, there are no more burgers available.")
        }
    }
}
// CUSTOMERS//
class customers{
    static totalCustomers = 0;

    constructor(customerEmail, name){
        this.customerEmail = customerEmail;
        this.name = name;
        customers.totalCustomers++;
    }

    order(){
        console.log(`Hello,${this.name} your order is being processed...`)
        burgerDelivery.orderSlots();
    }

    orderComplete(){
        console.log(`Hi, ${this.name}, your order has been processed and your email: ${this.customerEmail} has been recorded`);
    }
}

// USAGE

const firstOrder = new burgerDelivery("Agege Burger", 60.99);
const firstCustomer= new customers("JaneDoe@gmail.com","Jane");

const secondOrder = new burgerDelivery("Cheese Burger", 40.00);
const secondCustomer= new customers("JohnDoe@gmail.com", "John");

const thirdOrder = new burgerDelivery("Chicken Burger", 50.99);
const thirdCustomer= new customers("Jessica@gmail.com","Jessica");

firstCustomer.order();
firstCustomer.orderComplete();

console.log('------------------------')
console.log('------------------------')

secondCustomer.order();
secondCustomer.orderComplete();

console.log('------------------------')
console.log('------------------------')

thirdCustomer.order();
thirdCustomer.orderComplete();

console.log('------------------------')
console.log('------------------------')

console.log(`Total burgers ordered: ${burgerDelivery.totalorders}`);
console.log(`Total customers registered: ${customers.totalCustomers}`);