function failNegativeAmount(amount : number) : never {
    throw new Error(`Amount must be non negative. Received ${amount}.`);
}

function processTransaction(amount : number, description : string | undefined, isCredit : boolean) :void {
    if(amount < 0) {
        failNegativeAmount(amount);
    }

    const finalDescription = description ?? "(no description)";
    const typeLabel = isCredit ? "credit" : "debit";

    console.log(`Transaction: ${typeLabel} | Amount: ${amount} | Description: ${finalDescription}.`);
}

processTransaction(125, "Invoice Payment", true);
processTransaction(40, undefined ,false);