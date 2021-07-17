var value = Cookies.get("cart");
console.log(value);
var cart = JSON.parse(value);

// console.log(value);
// console.log(parsed, imgLink);

// console.log(parsed);
// console.log(parsed, imgLink);

// console.log(JSON.stringify(parsed));

function addCartItem(item){
var itemRow = document.createElement('div');
itemRow.style.borderBottom = "1px dashed grey";
itemRow.classList.add('grid');

var prodimg = document.createElement('img');
prodimg.setAttribute('src',item.imgLink);
prodimg.style.width ="200px";
console.log(prodimg);

itemRow.append(prodimg);

var prodName = document.createElement('h2');
prodName.innerText = item.name;
itemRow.append(prodName);

var prodDesc = document.createElement('p');
prodDesc.innerText = item.desc;
itemRow.append(prodDesc);

document.getElementById('shopCart').append(prodDesc);

}

addCartItem(cart);

for (i=0; i<cart.length; i++){
    shoppingCart[i].item
}
