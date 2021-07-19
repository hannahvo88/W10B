var value = Cookies.get("updateCart");
console.log(value);


var updateCart = JSON.parse(value);



function addToCart(product){
    var itemRow = document.createElement('div');
    itemRow.style.border = "2px solid black";
    itemRow.style.backgroundColor ="lightyellow";

    var proPic = document.createElement('img')
    proPic.setAttribute('src', product.picture);
    proPic.style.width = "300px";

    itemRow.append(proPic);

    var itemName = document.createElement('h1');
    itemName.innerText = product.name;

    itemRow.append(itemName);

    var itemPrice = document.createElement('span');
    itemPrice.innerText = product.price;

    itemRow.append(itemPrice);

    document.getElementById('cart').append(itemRow);
}

for (var i=0; i<updateCart.length; i++){
    addToCart(updateCart[i]);
}

function clearShoppingCart(){
    Cookies.remove('updateCart');
    location.replace("index.html");
}