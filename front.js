const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Existing event listeners
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Add form submission handlers
document.querySelector(".form-box.login form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch("login.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data === "Login successful!") {
            window.location.href = "dashboard.html"; // Redirect after successful login
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred during login");
    });
});

document.querySelector(".form-box.register form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch("register.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data === "Registration successful!") {
            wrapper.classList.remove('active'); // Switch back to login form
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred during registration");
    });
});