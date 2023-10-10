"use strict";

const monthlyToggle = document.getElementById('billing-toggle-monthly');
const yearlyToggle = document.getElementById('billing-toggle-yearly');
const monthlyPricesRow = document.querySelector('.table__row--monthly');
const yearlyPricesRow = document.querySelector('.table__row--yearly');

// Function to toggle between monthly and yearly billing
function toggleBilling() {
  if (yearlyToggle.checked) {
    monthlyPricesRow.style.display = 'none';
    yearlyPricesRow.style.display = 'table-row';
  } else {
    monthlyPricesRow.style.display = 'table-row';
    yearlyPricesRow.style.display = 'none';
  }
}

// Initially set the billing based on the default state of the yearly toggle
toggleBilling();

// Add event listeners to the toggle switches
monthlyToggle.addEventListener('change', toggleBilling);
yearlyToggle.addEventListener('change', toggleBilling);
