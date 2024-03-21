let cart=0;
function addToCart(productName, price) {
    cart=cart+price;
    alert(`${productName}   added to cart!`);
    alert("total bill is  "+cart);
}