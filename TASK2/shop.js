
let _bank = 1000;
let cart = {
    beer: {
        amount: 0
    },
    vine: {
        amount: 0
    },
    pepsi: {
        amount: 0
    }

}
let product = {
    beer: {
        count: 100,
        price: 45
    },
    vine: {
        count: 50,
        price: 100
    },
    pepsi: {
        count: 80,
        price: 20
    }
};

function sell() {
    product.beer.count -= cart.beer.amount
    product.vine.count -= cart.vine.amount
    product.pepsi.count -= cart.pepsi.amount
    _bank += (cart.beer.amount * product.beer.price) + (cart.vine.amount * product.vine.price) + (cart.pepsi.amount * product.pepsi.price)
    renderBank()
    reciept((cart.beer.amount * product.beer.price) + (cart.vine.amount * product.vine.price) + (cart.pepsi.amount * product.pepsi.price))
    document.querySelector('#cart_input').value = ``;

    cart = {
        beer: {
            amount: 0
        },
        vine: {
            amount: 0
        },
        pepsi: {
            amount: 0
        }

    }

}

function renderBank() {
    document.querySelector('#bank_input').value = _bank
    document.querySelector('#beer_input').value = `${product.beer.count} шт.`
    document.querySelector('#vine_input').value = `${product.vine.count} шт.`
    document.querySelector('#pepsi_input').value = `${product.pepsi.count} шт.`


}

function addBeer(count) {
    if (product.beer.count < count) {
        alert('Недостатння кількість пива на складі!!!')
    }
    else {
        let cart1 = {
            beer: {
                amount: count
            },
            vine: {
                amount: cart.vine.amount
            },
            pepsi: {
                amount: cart.pepsi.amount
            }
        }
        Object.assign(cart, cart1);
        renderCart('beer', count)
    }

}


function addVine(count) {
    if (product.vine.count < count) {
        alert('Недостатння кількість вина на складі!!!')
    }
    else {
        let cart1 = {
            beer: {
                amount: cart.beer.amount
            },
            vine: {
                amount: count
            },
            pepsi: {
                amount: cart.beer.amount
            }
        }
        Object.assign(cart, cart1);
        renderCart('vine', count)
    }

}

function addPepsi(count) {
    if (product.pepsi.count < count) {
        alert('Недостатння кількість пепсі на складі!!!')
    }
    else {
        let cart1 = {
            beer: {
                amount: cart.beer.amount
            },
            vine: {
                amount: cart.vine.amount
            },
            pepsi: {
                amount: count
            }
        }
        Object.assign(cart, cart1);
        renderCart('pepsi', count)
    }

}

function renderCart(name, count) {
    document.querySelector('#cart_input').value += `\n${name} : ${count}шт.`;

}

function reciept(total) {
    let reciept = '';
    if (cart.beer.amount > 0) {
        reciept += `<p>Beer : ${cart.beer.amount}</p>`
    }
    if (cart.vine.amount > 0) {
        reciept += `<p>Vine : ${cart.vine.amount}</p>`
    }
    if (cart.pepsi.amount > 0) {
        reciept += `<p>Pepsi : ${cart.pepsi.amount}</p>`
    }
    reciept += `\nTotal : ${total} GRN`
    document.querySelector('.reciept').innerHTML = reciept
}



export { sell, addBeer, addVine, addPepsi };


