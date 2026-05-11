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

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.find(u => u.username === user);

    if (exists) {
        alert("Username already exists");
        return false;
    }

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
        localStorage.setItem("loggedInUser", user);
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }

    return false;
}


// =======================
// CHECK LOGIN (Dashboard Protection)
// =======================
function checkLogin() {
    let user = localStorage.getItem("loggedInUser");

    if (!user) {
        alert("You must log in first");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("welcomeUser").innerText = "Welcome, " + user;

    loadDashboardData(user);
}


// =======================
// DASHBOARD DATA
// =======================
function loadDashboardData(user) {
    let matches = [
        "Alex - High Match",
        "Taylor - Medium Match",
        "Jordan - Low Match"
    ];

    document.getElementById("matches").innerHTML =
        matches.map(m => `<p>${m}</p>`).join("");

    document.getElementById("tipText").innerText =
        "Keep your profile updated for better roommate matches!";
}


// =======================
// LOGOUT
// =======================
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}


// =======================
// SEARCH FILTER
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
