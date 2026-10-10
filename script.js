"use strict";
// Fetch customers data
const fetchCustomers = async () => {
  const response = await fetch("/customers.json");
  if (!response.ok) {
    throw new Error("Error! Unable to retrieve data");
  }
  const customers = await response.json();
  return customers;
};

// --- Calculations ---
// Count Pro customers
const countProCustomers = (customers) => {
  return customers.filter((customer) => customer.plan === "pro").length;
};

// Calculate Monthly Revenue

const calculateMonthlyRevenue = (customers) => {
  return customers.reduce((sum, customer) => sum + customer.fee, 0);
};

// --- Display Table ---
// Show customers data
const showCustomersData = (customers) => {
  customers.forEach((customer) => {
    const customerContainer = document.getElementById("customer-container");
    const customerRow = document.createElement("tr");
    customerContainer.appendChild(customerRow);
    const customerName = document.createElement("td");
    customerName.textContent = customer.name;
    customerRow.appendChild(customerName);
    const customerCountry = document.createElement("td");
    customerCountry.textContent = customer.country;
    customerRow.appendChild(customerCountry);
    const customerPlan = document.createElement("td");
    customerPlan.textContent =
      customer.plan.charAt(0).toUpperCase() + customer.plan.slice(1);
    customerRow.appendChild(customerPlan);
    const customerFee = document.createElement("td");
    customerFee.textContent = `$${customer.fee}`;
    customerRow.appendChild(customerFee);
  });
};

// Show number of pro customers
const showProCount = (customers) => {
  const proCount = document.getElementById("pro-count");
  proCount.textContent = countProCustomers(customers);
};

// Show monthly revenue
const showMonthlyRevenue = (customers) => {
  const monthlyRevenue = document.getElementById("monthly-revenue");
  monthlyRevenue.textContent = `$${calculateMonthlyRevenue(customers)}`;
};

// Generate Customers Table
const loadCustomersData = async () => {
  try {
    const customers = await fetchCustomers();
    showCustomersData(customers);
    showProCount(customers);
    showMonthlyRevenue(customers);
    // searchCustomers(customers);
  } catch (error) {
    console.warn("Error!", error);
    const appMessages = document.getElementById("app-messages");
    appMessages.textContent = "Unable to retrieve data. Please try again later";
  }
};

loadCustomersData();
