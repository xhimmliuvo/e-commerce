async function addProduct(event) {
    event.preventDefault();
    
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;
    const stock = document.getElementById('product-stock').value;

    const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ name, description, price, stock })
    });

    if (response.ok) {
        alert('Product added successfully!');
        // Optionally refresh the product list
    } else {
        alert('Failed to add product.');
    }
}

document.getElementById('product-form').addEventListener('submit', addProduct);