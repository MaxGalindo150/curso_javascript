function calcularPrecioConDescuento(precio, descuento){
    return precio*(100-descuento)/100
}

const coupons = [
    {
        name: "Coupon_15",
        discountC: 15,
    },
    {
        name: "Coupon_25",
        discountC: 25,
    },
    {
        name: "Coupon_30",
        discountC: 30,
    }
];

function clickCoupon(){
    const couponValue = document.getElementById("InputCoupon").value;
    const price = document.getElementById("InputPrice").value;
    

    const isCouponValueValid = function(coupon){
         return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);

    if(!userCoupon)
    {
        alert("El cupón " + couponValue + " no es valido"); 
    }
    else
    {
        const discount = userCoupon.discountC;
        const finalePrice = calcularPrecioConDescuento(price, discount);

        const resultP = document.getElementById("result");
        resultP.innerText = "El precio con descuento es: $ " + finalePrice;
    }
}

function priceDiscount(){
    const price = document.getElementById("InputPrice").value;
    const discount = document.getElementById("InputDiscount").value;
     
    const finalePrice = calcularPrecioConDescuento(price, discount);

    const resultP = document.getElementById("result");
    resultP.innerText = "El precio con descuento es: $ " + finalePrice;
}
