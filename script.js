const customers = [
    { name: "Alice", country: "USA", plan: "pro", fee: 25 },
    { name: "John", country: "UK", plan: "free", fee: 0 },
    { name: "Maria", country: "USA", plan: "pro", fee: 25 },
    { name: "Ahmed", country: "Egypt", plan: "pro", fee: 15 },
    { name: "Sara", country: "Egypt", plan: "free", fee: 0 }
];

const showCustomerList = () => {
    // I create the table head since it's stable
    const customersDiv = document.getElementById('customers');
    const customersTable = document.createElement('table');
    customersDiv.appendChild(customersTable);
    customersTable.innerHTML += `
<caption>Customer List</caption>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Country</th>
<th scope="col">Plan</th>
<th scope="col">Monthly Fee</th>
</tr>
</thead>
`
// I create the table body and attach the customer data to it using forEach
    const customersTableBody = document.createElement('tbody');
    customersTable.appendChild(customersTableBody);
   
   
    customers.forEach(customer => {
        customersTableBody.innerHTML += `
    <tr>
    <td>${customer.name}</td>
    <td>${customer.country}</td>
    <td>${customer.plan.charAt(0).toUpperCase() + customer.plan.slice(1)}</td>
    <td>$${customer.fee}</td>
    </tr>
`
    });
}

document.onload = showCustomerList();