// called all the id's with get element and stored in variable

//called all the extra part added using button
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost");

//total price in the listing part
const totalPrice = document.getElementById("total-price");

//total price at the end
const finalPrice = document.getElementById("final-price");

//promo code part
const promoCodeInput = document.getElementById("promo-code-input");
const promoCodeButton = document.getElementById("promo-code-button");

// memory calculation section

// 8gb memory button handler
document.getElementById("8gb-memory").addEventListener("click", function () {
  memoryCost.innerText = "0";
  totalUpdatedPrice();
});

// 16gb memory button handler
document.getElementById("16gb-memory").addEventListener("click", function () {
  memoryCost.innerText = "180";
  totalUpdatedPrice();
});

// storage calculation section

// 256gb storage button handler
document.getElementById("256gb-storage").addEventListener("click", function () {
  storageCost.innerText = "0";

  totalUpdatedPrice();
});

// 512gb storage button handler
document.getElementById("512gb-storage").addEventListener("click", function () {
  storageCost.innerText = "100";

  totalUpdatedPrice();
});

//1TB storage button handler
document.getElementById("1TB-storage").addEventListener("click", function () {
  storageCost.innerText = "180";

  totalUpdatedPrice();
});

// delivery section button handler

// free delivery button handler
document.getElementById("free-delivery").addEventListener("click", function () {
  deliveryCost.innerText = "0";
  totalUpdatedPrice();
});

// $20 delivery button handler
document
  .getElementById("$20-dollar-delivery")
  .addEventListener("click", function () {
    deliveryCost.innerText = "20";
    totalUpdatedPrice();
  });

// total price calculation
function totalUpdatedPrice() {
  const memoryCostCalc = parseInt(memoryCost.innerText);
  const storageCostCalc = parseInt(storageCost.innerText);
  const deliveryCostCalc = parseInt(deliveryCost.innerText);

  // calculation of total cost after adding extra parts
  const sumTotal = 1299 + memoryCostCalc + storageCostCalc + deliveryCostCalc;

  totalPrice.innerText = sumTotal;
  finalPrice.innerText = sumTotal;
}

// discount calculation using a function after appliyng promo code
function proCodeFunction() {
  const promoValue = promoCodeInput.value;
  promoCodeInput.value = "";
  if (promoValue == "stevekaku") {
    const discountedAmount = finalPrice.innerText * 0.2;
    const amountToPayAfterDiscount = finalPrice.innerText - discountedAmount;

    document.getElementById("final-price").innerText = amountToPayAfterDiscount;
  } else {
    console.log("nothing");
  }
}

// clicking on the apply promocode button calling the function
document
  .getElementById("promo-code-button")
  .addEventListener("click", function () {
    proCodeFunction();
  });
