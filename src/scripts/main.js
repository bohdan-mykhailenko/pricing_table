"use strict";

const monthlyToggle = document.getElementById('billing-toggle-monthly');
const yearlyToggle = document.getElementById('billing-toggle-yearly');
const pricesRow = document.querySelector('.table__row--prices');

const monthlyPrices = ["$9.99/month", "$19.99/month", "$29.99/month"];
const yearlyPrices = ["$99.99/year", "$199.99/year", "$299.99/year"];

const toggleBilling = () => {
  if (yearlyToggle.checked) {
    updatePrices(yearlyPrices);
  } else {
    updatePrices(monthlyPrices);
  }
}

const updatePrices = (prices) => {
  const priceCells = pricesRow.querySelectorAll('.table__cell--data');

  prices.forEach((price, index) => {
    priceCells[index].textContent = price;
  });
}

toggleBilling();

monthlyToggle.addEventListener('change', toggleBilling);
yearlyToggle.addEventListener('change', toggleBilling);
