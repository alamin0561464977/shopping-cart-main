// =========iPhone 11 Silicone Case $$ iPhone=============
function updateProductNumber(product, price, isIncreaSing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreaSing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
};

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59
    const sumTotal = phoneTotal + caseTotal;
    const Tax = sumTotal / 10;
    const totalPrice = sumTotal + Tax;
    document.getElementById('sub-total').innerText = sumTotal;
    document.getElementById('Tax-amount').innerText = Tax;
    document.getElementById('total-price').innerText = totalPrice;

}

// ================iPhone 11 128GB Black=================
// ================phone-plus===============
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
// ==============phone-minus=============
document.getElementById('phone-minus').addEventListener('click', function () {
    // console.log('caseTotal')
    updateProductNumber('phone', 1219, false);
})
// =================iPhone 11 Silicone Case==============
// ===============case-plus=============
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
// =============case-minus===============
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})