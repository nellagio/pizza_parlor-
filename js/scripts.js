//Front-back
function updatePrice() {
    var priceValue = calculatePrice(); 
    
    var priceField = document.getElementById("totalCost");
    var priceDiv = document.getElementById("showPrice");
     priceField.innerHTML = "$" + priceValue;
    }  

function calculatePrice() {
    var orderForm = document.getElementById("orderForm");
    var price = 0;
    // get size of pizza

    price = price + parseInt(orderForm.size.value);

    // get price of meats
    var meatOptions = orderForm.meat;
    for (var i = 0; i < meatOptions.length; i++) {
        if (meatOptions[i].checked) {
            price = price + 2;
        }
    }

    // get price of veggies
    var vegOptions = orderForm.veggie;
    for (var i = 0; i < vegOptions.length; i++) {
        if (vegOptions[i].checked) {
            price = price + 1;
        }
    }
    return price;
}