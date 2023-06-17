let SubOrder = [];

MakeSub = () => {

    let orderTotal = 0;

    let subName = document.getElementById("subName").value;
    let breadOption = document.getElementById("breadOption").value;
    let subSize = document.getElementById("subSize").value
    
    if(breadOption === "Hoagie Rolls"){
        orderTotal = orderTotal + 30;
    } else if(breadOption === "Sub Rolls"){
        orderTotal = orderTotal + 40;
    } else if(breadOption === "Dense Sourdough Bread"){
        orderTotal = orderTotal + 50;
    } else if(breadOption === "Ciabatta Bread"){
        orderTotal = orderTotal + 35;
    }

    if(subSize === "Small"){
        orderTotal = orderTotal + 5;
    } else if(subSize === "Medium"){
        orderTotal = orderTotal + 10;
    } else if(subSize === "Large"){
        orderTotal = orderTotal + 20;
    }


    let subTop = document.getElementsByName("toppings");
    let subTopArray = [];
    for(let i = 0; i < subTop.length; i++){
        if(subTop[i].checked){
            subTopArray.push(subTop[i].value);
            orderTotal = orderTotal + +subTop[i].dataset.cost
        } 
    }

    let subSauces = document.getElementsByName("sauces");
    let subSauceArray = [];
    for(let i = 0; i < subSauces.length; i++){
        if(subSauces[i].checked){
            subSauceArray.push(subSauces[i].value);
            orderTotal = orderTotal + +subSauces[i].dataset.cost
        }
    }

    let drinkOpt = document.getElementsByName("drinksRadio")
    let drinkChoice;
    for(let i = 0; i < drinkOpt.length; i++){
        if(drinkOpt[i].checked){
            drinkChoice = drinkOpt[i].value
            orderTotal = orderTotal + +drinkOpt[i].dataset.cost
        }
    }
    
    if(subTopArray.length < 5){
        alert("You should have a minimum of 5 Toppings.")
        document.getElementById("SubForm").reset()
        reset();
    }

    if(subSauceArray.length < 1){
        alert("You should have a minimum of 1 Sauce.")
        document.getElementById("SubForm").reset()
        reset();
    }

    SubOrder.push({
        subName: subName,
        breadOption: breadOption,
        subSize: subSize,
        subTop: subTopArray,
        subSauces: subSauceArray,
        drinkOpt: drinkChoice,
        subPrice: orderTotal
    });

    document.getElementById("SubForm").reset()
}

makingCost = () => {
    
    let currentPrice = 0;

    let breadOption = document.getElementById("breadOption").value;
    if(breadOption === "Hoagie Rolls"){
        currentPrice = currentPrice + 30;
    }else if(breadOption === "Sub Rolls"){
        currentPrice = currentPrice + 40;
    } else if(breadOption === "Dense Sourdough Bread"){
        currentPrice = currentPrice + 50;
    } else if(breadOption === "Ciabatta Bread"){
        currentPrice = currentPrice + 35;
    }

    let subSize = document.getElementById("subSize").value;
    if(subSize === "Small"){
        currentPrice = currentPrice + 5;
    }else if(subSize === "Medium"){
        currentPrice = currentPrice + 10;
    } else if(subSize === "Large"){
        currentPrice = currentPrice + 20;
    }

    let subTop = document.getElementsByName("toppings");
    for(let i = 0; i < subTop.length; i++){
        if(subTop[i].checked){
            currentPrice = currentPrice + +subTop[i].dataset.cost
        }
    }

    let subSauces = document.getElementsByName("sauces");
    for(let i = 0; i < subSauces.length; i++){
        if(subSauces[i].checked){
            currentPrice = currentPrice + +subSauces[i].dataset.cost
        }
    }

    let drinkOpt = document.getElementsByName("drinksRadio")
    for(let i = 0; i < drinkOpt.length; i++){
        if(drinkOpt[i].checked){
            currentPrice = currentPrice + +drinkOpt[i].dataset.cost
        }
    }
    document.getElementById("makingCost").innerHTML = "R" + currentPrice + ".00"
}

showOrder = () => {
    let space = document.getElementById("placeOrder");
    let total = document.getElementById("finalPrice")
    space.innerHTML = "";

    let grandTotal = 0;

    for(let i = 0; i < SubOrder.length; i++){

        let name = SubOrder[i].subName;
        let bread = SubOrder[i].breadOption;
        let size = SubOrder[i].subSize;
        let toppings = SubOrder[i].subTop;
        let sauce = SubOrder[i].subSauces;
        let drink = SubOrder[i].drinkOpt;
        let price = SubOrder[i].subPrice; 

        grandTotal += price;

        space.innerHTML += `
            <div class="orderCard">
                <div class="order-body">
                    <h5 class="ingredients"><u>${name}</u></h5>
					<h5 class="orderPrice">R${price}.00</h5>
                    <p class="ingredients"><strong>Bread: </strong> ${bread}</p>
                    <p class="ingredients"><strong>Size: </strong> ${size}</p>
					<p class="ingredients"><strong>Drink:</strong> ${drink}</p>
                    <p class="ingredients"><strong>Toppings:</strong> ${toppings.join(', ')}</p>
                    <p class="ingredients"><strong>Sauce:</strong> ${sauce.join(', ')}</p>
                </div>
            </div>`

        total.innerHTML = "R" + grandTotal + ".00";
        document.getElementById("makingCost").innerHTML = "R0.00"

    }    
}

SubmitOrder = () => {
    let data = JSON.stringify(SubOrder);
    localStorage.setItem('order', data);
}