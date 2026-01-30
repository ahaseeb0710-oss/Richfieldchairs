
// Login function
function checkLoginStatus() {
    const user = localStorage.getItem("loggedInUser");

    const loginContainer = document.getElementById("login-container");
    const accountContainer = document.getElementById("account-container");

    if (user) {
       
        if (loginContainer) loginContainer.style.display = "none";
        if (accountContainer) {
            accountContainer.style.display = "block";
            document.getElementById("usernameDisplay").innerText = user;
        }
    } else {
       
        if (loginContainer) loginContainer.style.display = "block";
        if (accountContainer) accountContainer.style.display = "none";
    }
}

// Login function
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    
    localStorage.setItem("loggedInUser", email);

    alert("Login Successful!");
    window.location.reload();
}

// Logout function
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    alert("Logged Out!");
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", checkLoginStatus);
// ---------- CHECK LOGIN STATUS ----------
function checkLoginStatus() {
    const user = localStorage.getItem("loggedInUser");

    const loginContainer = document.getElementById("login-container");
    const accountContainer = document.getElementById("account-container");

    if (user) {
        if (loginContainer) loginContainer.style.display = "none";
        if (accountContainer) {
            accountContainer.style.display = "block";
            document.getElementById("usernameDisplay").innerText = user;
        }
    } else {
        if (loginContainer) loginContainer.style.display = "block";
        if (accountContainer) accountContainer.style.display = "none";
    }
}

// ---------- SIGNUP FUNCTION ----------
function signupUser(event) {
    event.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        alert("User already exists! Please login.");
        window.location.href = "login.html";
        return;
    }

    // Save new user
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please login.");
    window.location.href = "login.html";
}

// ---------- LOGIN FUNCTION ----------
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
        user => user.email === email && user.password === password
    );

    if (!validUser) {
        alert("Invalid email or password! Please signup first.");
        return;
    }

    localStorage.setItem("loggedInUser", validUser.name);
    alert("Login Successful!");
    window.location.reload();
}

// ---------- LOGOUT ----------
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    alert("Logged Out!");
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", checkLoginStatus);
