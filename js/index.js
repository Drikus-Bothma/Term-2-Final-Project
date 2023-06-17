SubOrder = []

AddToOrder = () => {

    SubOrder.push({
        subName: "Supreme Meat",
        breadOption: "Sub Rolls",
        subSize: "Large",
        drinkOpt: "None",
        subTop: ["Bacon", "Pulled Pork", "Sandwich Ham", "Smoked Turkey Ham", "Lettuce", "Tomatoes", "Cheese", "Gherkins"],
        subPrice: 120,
    })
}

AddToOrder2 = () => {

    SubOrder.push({
        subName: "The Monster",
        breadOption: "Dense Sourdough Bread",
        subSize: "Large",
        drinkOpt: "Coke",
        subTop: ["Bacon", "Pulled Pork", "Green Peppers", "Red Onion", "Mayo", "Tomatoes", "Cheese"],
        subPrice: 105,
    })
}

AddToOrder3 = () => {

    SubOrder.push({
        subName: "Greg's Fav",
        breadOption: "Ciabatta Bread",
        subSize: "Medium",
        drinkOpt: "Pine Nut",
        subTop: ["Lettuce", "Red Onion", "Tomatoes", "Cheese", "Salami"],
        subPrice: 85,
    })
}

AddToOrder4 = () => {

    SubOrder.push({
        subName: "Hammy Sammy",
        breadOption: "Sub Rolls",
        subSize: "Large",
        drinkOpt: "Fanta Orange",
        subTop: ["Bacon", "Sandwich Ham", "Lettuce", "Tomatoes",],
        subPrice: 105,
    })
}

AddToOrder5 = () => {

    SubOrder.push({
        subName: "Sub Sub Salami",
        breadOption: "Hoagie Rolls",
        subSize: "Small",
        drinkOpt: "Coke",
        subTop: ["Salami", "Lettuce", "Tomatoes", "Cheese"],
        subPrice: 90,
    })
}

AddToOrder6 = () => {

    SubOrder.push({
        subName: "Turkey Deluxe",
        breadOption: "Dense Sourdough Bread",
        subSize: "Large",
        drinkOpt: "7 Up",
        subTop: ["Smoked Turkey Ham", "Lettuce", "Cucumber", "Yellow Onion", "Mozzarella Cheese"],
        subPrice: 120,
    })
}

AddToOrder7 = () => {

    SubOrder.push({
        subName: "Pure Luxury",
        breadOption: "Sub Rolls",
        subSize: "Large",
        drinkOpt: "None",
        subTop: ["Pastrami", "Red Onion", "Red Onion", "Tomatoes", "Lettuce", "Mozzarella Cheese"],
        subPrice: 130,
    })
}

AddToOrder8 = () => {

    SubOrder.push({
        subName: "Grinder",
        breadOption: "Hoagie Rolls",
        subSize: "Small",
        drinkOpt: "None",
        subTop: ["Sandwich Ham", "Lettuce", "Tomatoes", "Cheese", "Secret Sauce"],
        subPrice: 115,
    })
}



SubmitOrder = () => {
    let data = JSON.stringify(SubOrder);
    localStorage.setItem('order', data);
}