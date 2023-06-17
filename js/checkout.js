let checkTotal = 0;
let totalArea = 0;

showCheck = () => {
    let data = JSON.parse(localStorage.getItem('order'));
    let space = document.getElementById('placeOrder');
    let totalArea = document.getElementById('total');

    for(let i = 0; i < data.length; i++){

        let name = data[i].subName;
        let bread = data[i].breadOption;
        let size = data[i].subSize;
        let subTop = data[i].subTop;
        let drink = data[i].drinkOpt; 
        let price = data[i].subPrice; 

        checkTotal += price;

        space.innerHTML += `
            <div class="orderCard">
                <div class="order-body">
                    <h5 class="ingredients"><u>${name}</u></h5>
					<h5 class="orderPrice">R${price}.00</h5>
                    <p class="ingredients"><strong>Bread: </strong> ${bread}</p>
                    <p class="ingredients"><strong>Size: </strong> ${size}</p>
					<p class="ingredients"><strong>Drink:</strong> ${drink}</p>
                    <p class="ingredients"><strong>Toppings:</strong> ${subTop.join(', ')}</p>
                </div>
            </div>`

        totalArea.innerHTML = "R" + checkTotal + ".00"
    }
}

AddDiscount = () => {
    let newCheckTotal = 0;

    let code = document.getElementById("promoCode").value;
    if(code === "12345"){

        newCheckTotal = checkTotal - 100;
        document.getElementById("total").innerHTML = "R" + newCheckTotal + ".00"

    } else {
        alert("Sorry your Promo Code is invalid.")
    }
}

MakePayment = () => {
        localStorage.removeItem('order');
        window.location.href = '../index.html'
}