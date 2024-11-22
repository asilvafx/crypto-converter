let price = document.getElementById('price');
let btn = document.getElementById('btn');
let cryptoInp = document.querySelector('#crypto');
let currencyInp = document.querySelector('#currency');

btn.addEventListener('click',getPrice);

function getPrice() {
    let crypto = cryptoInp.value;
    let currency = currencyInp.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.coingecko.com/api/v3/simple/price?ids='+crypto+'&vs_currencies='+currency);

    xhr.onload = function(){
        if (this.status == 200) {
            data =  JSON.parse(this.responseText);
            price.innerHTML = "≃ "+data[crypto][currency]+" "+currency.toUpperCase();
            price.style.display = 'block';

        }else{
            price.innerHTML = 'Error'
        }

    }
    xhr.send();

}