// Function to handle order form submission
function handleOrderFormSubmit(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // DOM API usage: getting the form elements
    const form = event.target;
    
    // Using Loops and Conditionals to extract all form data dynamically
    const formData = [];
    
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        
        // Skip buttons and fields without a name attribute
        if (element.name && element.type !== 'submit' && element.type !== 'reset') {
            let value = element.value;
            let include = true;
            
            // Conditional to properly handle radio buttons and checkboxes
            if ((element.type === 'radio' || element.type === 'checkbox')) {
                if (!element.checked) {
                    include = false;
                }
            }
            
            if (include) {
                formData.push({
                    name: element.name,
                    value: value
                });
            }
        }
    }

    // Convert data to JSON string and save to localStorage
    localStorage.setItem('auraTechOrderData', JSON.stringify(formData));
    
    // Navigate to a fresh HTML page to display the formatted table
    window.location.href = 'summary.html';
}

// Function to read saved data and populate it into an HTML table using the DOM API
function populateSummaryTable() {
    const tableContainer = document.getElementById('summary-table-container');
    
    // Ensure the container exists on this page
    if (!tableContainer) return;

    const storedData = localStorage.getItem('auraTechOrderData');
    
    if (storedData) {
        // Parse JSON back to an array
        const formData = JSON.parse(storedData);
        
        // Create table element using DOM API
        const table = document.createElement('table');
        
        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const thField = document.createElement('th');
        thField.textContent = 'Form Field';
        
        const thValue = document.createElement('th');
        thValue.textContent = 'Submitted Data';
        
        // Append headers to the row, and row to thead
        headerRow.appendChild(thField);
        headerRow.appendChild(thValue);
        thead.appendChild(headerRow);
        
        // Append thead to table
        table.appendChild(thead);
        
        // Create table body
        const tbody = document.createElement('tbody');
        
        // Loop through extracted form data and create table rows
        for (let j = 0; j < formData.length; j++) {
            const row = document.createElement('tr');
            
            // Create field name cell
            const cellName = document.createElement('td');
            
            // Clean up name string to present nicely
            let readableName = formData[j].name.replace(/[_-]/g, ' ');
            readableName = readableName.charAt(0).toUpperCase() + readableName.slice(1);
            
            cellName.innerHTML = `<strong>${readableName}</strong>`;
            
            // Create value cell
            const cellValue = document.createElement('td');
            cellValue.textContent = formData[j].value;
            
            // Append cells to row
            row.appendChild(cellName);
            row.appendChild(cellValue);
            
            // Append row to body
            tbody.appendChild(row);
        }
        
        table.appendChild(tbody);
        
        // Final DOM append to the container
        tableContainer.appendChild(table);
    } else {
        // Fallback conditional if no data exists
        const paragraph = document.createElement('p');
        paragraph.className = 'empty-message';
        paragraph.textContent = 'No recent order data found. Please submit an order first.';
        tableContainer.appendChild(paragraph);
    }
}

// Set up Event Listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Attach listener to order form if present on the page
    const orderForm = document.getElementById('tech-order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderFormSubmit);
    }
    
    // Trigger table population if we are on the summary page
    const summaryTableContainer = document.getElementById('summary-table-container');
    if (summaryTableContainer) {
        populateSummaryTable();
    }
    
    // Attach listener to confirm pay button (replacing inline onclick attribute)
    const confirmBtn = document.getElementById('confirm-pay-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            alert('Submission final step successfully executed.');
        });
    }
});
