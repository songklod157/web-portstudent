
function addToCart(product, price, callback = null) {
    let jsonCartInfo = getCartInfo();
    if(jsonCartInfo[product] == null) {
        jsonCartInfo[product] = {
            qty: 1,
            price: price
        };
    } else {
        jsonCartInfo[product].qty += 1;
    }
    localStorage.setItem("jsonCartInfo",JSON.stringify(jsonCartInfo));
    if(callback != null) callback();
}      
function removeFromCart(product, callback = null) {
    let jsonCartInfo = getCartInfo();
    jsonCartInfo[product].qty--;
    if(jsonCartInfo[product].qty == 0) {
      delete jsonCartInfo[product]
    }
    localStorage.setItem("jsonCartInfo", JSON.stringify(jsonCartInfo));
    if(callback != null) callback();
}
function removeAllFromCart(product, callback = null) {
    let jsonCartInfo = getCartInfo();
    delete jsonCartInfo[product];
    localStorage.setItem("jsonCartInfo", JSON.stringify(jsonCartInfo));
    if(callback != null) callback();
}

function getCartInfo() {
    let jsonCartInfo = localStorage.jsonCartInfo;
    if(jsonCartInfo == null) jsonCartInfo = {};
    else jsonCartInfo = JSON.parse(jsonCartInfo);
    return jsonCartInfo;
}
function Notification()
        {
            alert("This package already add to cart!!");
        } 