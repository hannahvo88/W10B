function appear(){
    var buttons = document.querySelectorAll('button');
    console.log(buttons);
    for (var i=0; i<buttons.length;i++){
        buttons[i].classList.toggle('reviewButton');
}
}

function getCardInfo(element){
    var parent = element.parentElement;
    var imgSrc = parent.querySelector('img').getAttribute('src')
    var heading = parent.querySelector('h2').innerText;
    var description = parent.querySelector('p').innerText;
    var info = {
        imgLink : imgSrc,
        name : heading,
        desc :description
    }
    console.log(info);

    return info;
}

// Cookies.set("test", "testing123");
// var value = Cookies.get("test");
// console.log(value);
