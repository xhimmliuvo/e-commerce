async function fetchUserProfile() {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:5000/api/users/profile', {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    const user = await response.json();
    document.getElementById('profile-email').value = user.email;
}

document.getElementById('profile-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('profile-email').value;
    const password = document.getElementById('profile-password').value;

    const response = await fetch('http://localhost:5000/api/users/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        alert('Profile updated successfully!');
    } else {
        alert('Failed to update profile.');
    }
});

document.addEventListener('DOMContentLoaded', fetchUserProfile);