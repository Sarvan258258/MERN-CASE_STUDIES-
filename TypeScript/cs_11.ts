type TransactionType = "checkout" | "return" | "cancelled" | "priority";

type Transaction = {
    id : number;
    type : TransactionType;
};

const transactions : Transaction[] = [
    {id : 1, type : "cancelled"},
    {id : 2, type : "checkout"},
    {id : 3, type : "priority"},
    {id : 4, type : "return"},
    {id : 5, type : "checkout"}
];

type Inventory = {
    [title : string] : number;
};

const inventrory : Inventory = {
    "The Avengers": 5,
    "A song of Ice and Fire" : 6,
    "A knight of the seven kingdoms" : 7,
    "Fire and Blood" : 8
};


const transactionCounter : Record<TransactionType, number> =  {
    checkout : 0,
    return : 0,
    priority : 0,
     cancelled : 0
};

for(let i : number = 0; i < transactions.length; i++) {
    const currType = transactions[i].type;
    transactionCounter[currType]++;
}

console.log("Transaction Counter : ", transactionCounter);


const incomingTransactions: Transaction[] = [
	{ id: 7, type: "checkout" },
	{ id: 8, type: "return" },
	{ id: 9, type: "cancelled" }
];

let newId = 10;
let monitorCycles = 0;

while (true) {
	monitorCycles++;

	if (monitorCycles === 3) {
		incomingTransactions.push({ id: newId++, type: "priority" });
		console.log("New priority transaction arrived.");
	}

	if (incomingTransactions.length === 0) {
		continue;
	}

	const nextTransaction = incomingTransactions.shift() as Transaction;
	console.log("Monitoring:", nextTransaction);

	if (nextTransaction.type === "priority") {
		console.log("Priority transaction detected. Breaking loop.");
		break;
	}
}

const returnQueue: string[] = ["Return-A", "Return-B"];
let handledReturns = 0;
do {
	const nextReturn = returnQueue.shift();

	if (!nextReturn) {
		break;
	}

	console.log("Handled return:", nextReturn);
	handledReturns++;

	if (handledReturns === 1) {
		returnQueue.push("Return-C", "Return-D");
		console.log("Added new returns dynamically.");
	}
} while (returnQueue.length > 0);

const inventory: Record<string, number> = {
	books: 12,
	magazines: 6,
	dvds: 9
};

for (const item in inventory) {
	inventory[item] = 0;
}

console.log("Inventory reset:", inventory);

const visitors: string[] = ["Asha", "Ben", "Chris", "Dina", "Eli"];

console.log("Visitors in reverse order:");
for (let index = visitors.length - 1; index >= 0; index--) {
	console.log(visitors[index]);
}
