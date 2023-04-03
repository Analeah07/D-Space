let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1, name: 'Iphone 13', image: '1.jpg', price: 42990
    },
    {
        id: 2, name: 'Samsung Galaxy S23', image: '2.jpg', price: 81990
    },
    {
        id: 3, name: 'Huawei Mate 50 Pro', image: '3.jpg', price: 68999
    },
    {
        id: 4, name: 'OPPO Find N2 Flip', image: '4.jpg', price: 44180
    },
    {
        id: 5, name: 'Xiaomi 12 Ultra', image: '5.jpg', price: 59856
    },
    {
        id: 6, name: 'Vivo Y100 5G', image: '6.jpg', price: 15510
    },
    {
        id: 7, name: 'Nokia C12', image: '7.jpg', price: 5640
    },
    {
        id: 8, name: 'Asus ROG Phone 6', image: '8.jpg', price: 54995
    },
    {
        id: 9, name: 'Motorola Edge 40', image: '9.jpg', price: 23453
    },
    {
        id: 10, name: 'Honor Play 7T', image: '10.jpg', price: 7990
    },
    {
        id: 11, name: 'Huawei Mate X3', image: '11.jpg', price: 89300
    },
    {
        id: 12, name: 'Vivo X80 Pro', image: '12.jpg', price: 43240
    },
    {
        id: 13, name: 'Tecno Spark 10C', image: '13.jpg', price: 7520
    },
    {
        id: 14, name: 'Redmi A2', image: '14.jpg', price: 5405
    },
    {
        id: 15, name: 'OPPO A57', image: '15.jpg', price: 8990
    },
    {
        id: 16, name: 'Huawei P30', image: '16.jpg', price: 29990
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title" style="height:50px; weight:bold;">${value.name}</div>
            <div class="price">Php${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerHTML = `<p class="TPrice">Total Price: ${totalPrice.toLocaleString()}</p>`;
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    console.log(key, quantity);
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

