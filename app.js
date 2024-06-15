
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve username and password
    var username = document.getElementById('name').value;
    var password = document.getElementById('password').value;
  
    // You can perform validation or authentication here
  
    // For demonstration, let's assume the login is successful and redirect to home page
    // Replace 'home.html' with the URL of your home page
    window.location.href = 'home.html';
});