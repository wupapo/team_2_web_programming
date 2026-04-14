function handleOrderFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    
    const formData = [];
    
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        
        if (element.name && element.type !== 'submit' && element.type !== 'reset') {
            let value = element.value;
            let include = true;
            
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

    localStorage.setItem('auraTechOrderData', JSON.stringify(formData));
    
    window.location.href = 'summary.html';
}

function populateSummaryTable() {
    const tableContainer = document.getElementById('summary-table-container');
    
    if (!tableContainer) return;

    const storedData = localStorage.getItem('auraTechOrderData');
    
    if (storedData) {
        const formData = JSON.parse(storedData);
        
        const table = document.createElement('table');
        
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const thField = document.createElement('th');
        thField.textContent = 'Form Field';
        
        const thValue = document.createElement('th');
        thValue.textContent = 'Submitted Data';
        
        headerRow.appendChild(thField);
        headerRow.appendChild(thValue);
        thead.appendChild(headerRow);
        
        table.appendChild(thead);
        
        const tbody = document.createElement('tbody');
        
        for (let j = 0; j < formData.length; j++) {
            const row = document.createElement('tr');
            
            const cellName = document.createElement('td');
            
            let readableName = formData[j].name.replace(/[_-]/g, ' ');
            readableName = readableName.charAt(0).toUpperCase() + readableName.slice(1);
            
            cellName.innerHTML = `<strong>${readableName}</strong>`;
            
            const cellValue = document.createElement('td');
            cellValue.textContent = formData[j].value;
            
            row.appendChild(cellName);
            row.appendChild(cellValue);
            
            tbody.appendChild(row);
        }
        
        table.appendChild(tbody);
        
        tableContainer.appendChild(table);
    } else {
        const paragraph = document.createElement('p');
        paragraph.className = 'empty-message';
        paragraph.textContent = 'No recent order data found. Please submit an order first.';
        tableContainer.appendChild(paragraph);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    const orderForm = document.getElementById('tech-order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderFormSubmit);
    }
    
    const summaryTableContainer = document.getElementById('summary-table-container');
    if (summaryTableContainer) {
        populateSummaryTable();
    }
    
    const confirmBtn = document.getElementById('confirm-pay-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            alert('Submission final step successfully executed.');
        });
    }
});
