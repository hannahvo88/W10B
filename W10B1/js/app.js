var cart = [];


function addCart(item){
    var items = item.parentElement;
    var img = items.querySelector('img').getAttribute('src');
    var proName = items.querySelector('h1').innerText;
    var proPrice = items.querySelector('span').innerText;

    var itemList = {
        picture : img,
        name : proName,
        price : proPrice
    }

    cart.push(itemList);
    console.log(cart);
    updateShoppingCart();
}


function updateShoppingCart(){
    Cookies.set("updateCart", cart);
}

function checkCookies() {
    var myCookie = Cookies.get("updateCart");
    if(myCookie == null){
        alert("please select an item");
    }else{
        return true;
    }

}

