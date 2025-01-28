document.getElementById('checkout-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    const orderData = {
        customerDetails: { name, phone, address },
        paymentMethod: payment,
        products: [] // Add selected products here
    };

    const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
    });

    if (response.ok) {
        alert('Order placed successfully!');
    } else {
        alert('Failed to place order.');
    }
});