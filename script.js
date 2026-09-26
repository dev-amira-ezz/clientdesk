const customers = [
  { name: "Alice", country: "USA", plan: "pro", fee: 25 },
  { name: "John", country: "UK", plan: "free", fee: 0 },
  { name: "Maria", country: "USA", plan: "pro", fee: 25 },
  { name: "Ahmed", country: "Egypt", plan: "pro", fee: 15 },
  { name: "Sara", country: "Egypt", plan: "free", fee: 0 },
];

// Display customer data into a table format
const generateList = () => {
  const tableBody = document.getElementById("tableBody");

  customers.forEach((customer) => {
    tableBody.innerHTML += `
    <tr>
    <td>${customer.name}</td>
    <td>${customer.country}</td>
    <td>${customer.plan.charAt(0).toUpperCase() + customer.plan.slice(1)}</td>
    <td>$${customer.fee}</td>
    </tr>
`;
  });
};

const calculateProCustomers = () => {
  const proCustomersCount = customers.filter(
    (customer) => customer.plan === "pro",
  ).length;
  return proCustomersCount;
};

const calculateMonthlyEarnings = () => {
  const totalMonthlyEarnings = customers.reduce(
    (sum, customer) => sum + customer.fee,
    0,
  );
  return totalMonthlyEarnings;
};

// Display pro members count and monthly earnings
const generateFooterData = () => {
  const proCustomersCount = calculateProCustomers();

  const totalMonthlyEarnings = calculateMonthlyEarnings();

  const tableFooter = document.getElementById("tableFooter");
  tableFooter.innerHTML = `
    <tr><th scope="row" colspan="3">
    Total No. of Pro Customers
    </th>
    <td>${proCustomersCount}</td>
    </tr>
    <tr>
    <th scope="row" colspan="3">Total Monthly Earnings</th>
    <td>$${totalMonthlyEarnings}</td>
    </tr>
    `;
};

const showCustomerList = () => {
  generateList();
  generateFooterData();
};

showCustomerList();
