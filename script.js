// =======================
// REGISTER
// =======================
function registerUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please enter username and password");
        return false;
    }

    // Get existing users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    let exists = users.find(u => u.username === username);

    if (exists) {
        alert("Username already taken");
        return false;
    }

    // Save new user
    users.push({
        username: username,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created! Please log in.");
    window.location.href = "login.html";

    return false;
}


// =======================
// LOGIN
// =======================
function loginUser() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill out all fields");
        return false;
    }

    let users = JSON.parse(localStorage.getItem("users"));

    // safety check
    if (!Array.isArray(users)) {
        users = [];
    }

    console.log("Users loaded:", users);

    for (let i = 0; i < users.length; i++) {
        console.log("Checking:", users[i]);

        if (users[i].username === username && users[i].password === password) {
            localStorage.setItem("loggedInUser", username);
            alert("Login successful!");
            window.location.href = "dashboard.html";
            return false;
        }
    }

    alert("Incorrect username or password");
    return false;
}

// =======================
// DASHBOARD CHECK
// =======================
function checkLogin() {
    let user = localStorage.getItem("loggedInUser");

    if (!user) {
        alert("You must log in first");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("welcomeUser").innerText = "Welcome, " + user;
}


// =======================
// LOGOUT
// =======================
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
