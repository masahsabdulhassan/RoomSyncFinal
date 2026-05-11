// =======================
// REGISTER
// =======================
console.log("REGISTER FUNCTION CALLED");

let users = JSON.parse(localStorage.getItem("users")) || [];

users.push({
    username,
    password,
    budget,
    location,
    cleanliness
});

localStorage.setItem("users", JSON.stringify(users));

console.log("SAVED USERS:", localStorage.getItem("users"));


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
