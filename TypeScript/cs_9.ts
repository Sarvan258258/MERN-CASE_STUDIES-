type ProductID = number;
let phoneID : ProductID = 41;

type OrderStatus  = "pending" | "shipped" | "retruned";
let orderstatus : OrderStatus = "shipped";

type Coordinate = [x : number, y : number];

let point1 : Coordinate = [2, 3];

type CustomerID = string;
type Customer = {
    id : CustomerID;
    name : string;
    email? : string;
}

type ProcessOrder = (orderId : number, callback : (status : OrderStatus) => void) => void;

type Container<T>  =  {
    value : T;
};

const customer1 : Customer = {
    id : "cus-01",
    name : "sarvan",
};

const customerContainer : Container<Customer> = {
    value : customer1,
};

const processOrder : ProcessOrder = (orderId, callback) => {
    console.log("Processing order: ", orderId);
    callback("shipped");
};

processOrder(101, (status) => {
    console.log("Order Status : ", status);
});

console.log("Customer container : ", customerContainer);

