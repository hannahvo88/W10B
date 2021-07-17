function appear(){
    var buttons = document.querySelectorAll('button');
    for (var i=0; i<buttons.length;i++){
        buttons[i].classList.toggle('reviewButton');
}
}

function addCartInfo(element){
    var parent = element.parentElement;
    var imgSrc = parent.querySelector('img').getAttribute('src')
    var heading = parent.querySelector('h2').innerText;
    var description = parent.querySelector('p').innerText;
    var info = {
        imgLink : imgSrc,
        name : heading,
        desc :description
    }

    // Cookies.set("productInfo", info);
    shoppingCart.push(info);
    console.log(shoppingCart);
   
    // return info;
}

function checkout(){
    Cookies.set("set",)
}

var shoppingCart = [];

// Cookies.set('secure', 'secret', {secure:true});

// Cookies.set("test", "testing123");
// var value = Cookies.get("test");
// console.log(value);

// // Cookies.remove("test");
// // value = Cookies.get("test");
// // console.log(value);

// Cookies.set("name", "Hannah");
// Cookies.set("test", "This is another test", { expires: 7, path: '/shop.html', path: '/checkout.html'});

// var value = Cookies.get("test");
// console.log(value);

