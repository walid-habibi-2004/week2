let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

const displayGroceries = () => {
    console.log("Fruits in groceries:");
    groceries.fruits.forEach(fruit => console.log(fruit));
}

displayGroceries();

const cloneGroceries = () => {
    let user = client;

    client = "Betty";

    console.log("\n--- Primitive (Pass by Value) ---");
    console.log("user:", user);
    console.log("client:", client);
    // Explanation: Primitive types are copied by value, so changing client does NOT affect user

    let shopping = groceries;

    // Change totalPrice
    shopping.totalPrice = "35$";
    console.log("\n--- Object (Pass by Reference) ---");
    console.log("groceries.totalPrice:", groceries.totalPrice); // "35$"
    // Explanation: Objects are copied by reference, modifying shopping affects groceries

    // Change paid
    shopping.other.paid = false;
    console.log("groceries.other.paid:", groceries.other.paid); // false
    // Nested objects are also references
}

cloneGroceries();
