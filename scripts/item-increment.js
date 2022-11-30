document.getElementById("tv-plus").addEventListener('click',function(){
    const itemTv = getElement("item-tv");
    const currentItemNumber = getInputValue(itemTv);
    const newItemNumber=changeInputItem(currentItemNumber,itemTv);
    const tvPriceElement = getElement("tv-price");
    const tvPrice = getElementValue(tvPriceElement);
    const subTotal = findSubTotalPrice(tvPrice,currentItemNumber,newItemNumber,"subtotal");
    const tax = findTax("tax",subTotal);
    findTotal("total",tax,subTotal);
});

document.getElementById("tv-stand-plus").addEventListener('click',function(){
    const itemTvStand = getElement("item-tv-stand");
    const currentItemNumber = getInputValue(itemTvStand);
    const newItemNumber = changeInputItem(currentItemNumber,itemTvStand);
    const tvStandPriceElement = getElement("tv-stand-price");
    const tvStandPrice = getElementValue(tvStandPriceElement);
    const subTotal = findSubTotalPrice(tvStandPrice,currentItemNumber,newItemNumber,"subtotal");
    const tax = findTax("tax",subTotal);
    findTotal("total",tax,subTotal);
});