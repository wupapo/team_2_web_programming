// Function to handle form submission and extract data
function handleOrderFormSubmit(event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    const form = event.target;
    // Array to hold the extracted form data
    const formData = [];
    
    // Loop through all elements in the form
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        
        // Conditional to check if element has a name and is not a button
        if (element.name && element.type !== 'submit' && element.type !== 'reset') {
            let value = element.value;
            let include = true;
            
            // Conditional specifically for checkboxes and radio buttons to only include checked values
            if ((element.type === 'radio' || element.type === 'checkbox')) {
                if (!element.checked) {
                    include = false;
                }
            }
            
            // Add valid inputs to the array
            if (include) {
                formData.push({
                    name: element.name,
                    value: value
                });
            }
        }
    }

    // Save extracted data to localStorage so it can be retrieved on the summary page
    localStorage.setItem('auraTechOrderData', JSON.stringify(formData));
    
    // Redirect to a fresh HTML page to display the table
    window.location.href = 'summary.html';
}

// Function to populate the summary table using DOM API
function populateSummaryTable() {
    const tableContainer = document.getElementById('summary-table-container');
    
    if (!tableContainer) return;

    // Retrieve data from localStorage
    const storedData = localStorage.getItem('auraTechOrderData');
    
    if (storedData) {
        const formData = JSON.parse(storedData);
        
        // Create table element using DOM API
        const table = document.createElement('table');
        
        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        // Create and append the two column headers
        const thField = document.createElement('th');
        thField.textContent = 'Form Field';
        
        const thValue = document.createElement('th');
        thValue.textContent = 'Submitted Data';
        
        headerRow.appendChild(thField);
        headerRow.appendChild(thValue);
        thead.appendChild(headerRow);
        
        table.appendChild(thead);
        
        // Create table body
        const tbody = document.createElement('tbody');
        
        // Loop to generate table rows for each data item dynamically
        for (let j = 0; j < formData.length; j++) {
            const row = document.createElement('tr');
            
            const cellName = document.createElement('td');
            
            // Format name to be readable (remove underscores, capitalize)
            let readableName = formData[j].name.replace(/[_-]/g, ' ');
            readableName = readableName.charAt(0).toUpperCase() + readableName.slice(1);
            
            // Inject readable name wrapped in a bold tag
            cellName.innerHTML = `<strong>${readableName}</strong>`;
            
            const cellValue = document.createElement('td');
            cellValue.textContent = formData[j].value;
            
            row.appendChild(cellName);
            row.appendChild(cellValue);
            
            tbody.appendChild(row);
        }
        
        table.appendChild(tbody);
        
        // Inject table into container
        tableContainer.appendChild(table);
    } else {
        // Fallback if no order data is found
        const paragraph = document.createElement('p');
        paragraph.className = 'empty-message';
        paragraph.textContent = 'No recent order data found. Please submit an order first.';
        tableContainer.appendChild(paragraph);
    }
}

// Set up event listeners once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Add submit event listener to the order form
    const orderForm = document.getElementById('tech-order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderFormSubmit);
    }
    
    // Attempt to populate the summary table if container exists
    const summaryTableContainer = document.getElementById('summary-table-container');
    if (summaryTableContainer) {
        populateSummaryTable();
    }
    
    // Add click event listener to the confirmation button
    const confirmBtn = document.getElementById('confirm-pay-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            alert('Submission final step successfully executed.');
        });
    }
});
