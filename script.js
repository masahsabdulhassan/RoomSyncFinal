// =======================
// REGISTER USER
// =======================
function registerUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user.trim() === "" || pass.trim() === "") {
        alert("Please fill all fields");
        return false;
    }

    // Get existing users or create empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username already exists
    let exists = users.find(u => u.username === user);

    if (exists) {
        alert("Username already exists");
        return false;
    }

    // Add new user
    users.push({
        username: user,
        password: pass
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created!");
    window.location.href = "login.html";

    return false;
}


// =======================
// LOGIN USER
// =======================
function loginUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user.trim() === "" || pass.trim() === "") {
        alert("Please fill all fields");
        return false;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(u => u.username === user && u.password === pass);

    if (validUser) {
        alert("Login successful!");

        // Save session (logged-in user)
        localStorage.setItem("loggedInUser", user);

        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }

    return false;
}


// =======================
// LOGOUT USER
// =======================
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}


// =======================
// CHECK IF USER IS LOGGED IN (use on dashboard)
// =======================
function checkLogin() {
    let user = localStorage.getItem("loggedInUser");

    if (!user) {
        alert("You must log in first");
        window.location.href = "login.html";
    } else {
        document.getElementById("welcomeUser").innerText = "Welcome, " + user;
    }
}


// =======================
// SEARCH FILTER (your existing code improved slightly)
// =======================
function filterUsers() {
    let filter = document.getElementById("filter").value;
    let users = document.querySelectorAll(".user");

    users.forEach(user => {
        let cleanLevel = user.dataset.clean;

        if (filter === "all" || cleanLevel === filter) {
            user.style.display = "block";
        } else {
            user.style.display = "none";
        }
    });
}
