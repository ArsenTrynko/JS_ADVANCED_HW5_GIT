import *  as SHOP from "./shop.js";


document.querySelector('#add').addEventListener('click', function () {
    let count = document.querySelector('#count_input').value
    for (let i = 0; i < document.querySelectorAll('.radio1').length; i++) {
        if (document.querySelectorAll('.radio1')[i].checked) {
            if (document.querySelectorAll('.radio1')[i].value == 'beer') { SHOP.addBeer(count) }
            if (document.querySelectorAll('.radio1')[i].value == 'vine') { SHOP.addVine(count) }
            if (document.querySelectorAll('.radio1')[i].value == 'pepsi') { SHOP.addPepsi(count) }
        }
    }
})


document.querySelector('#buy').addEventListener('click', function () {
    SHOP.sell()
})


