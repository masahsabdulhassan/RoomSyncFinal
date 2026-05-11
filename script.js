// RoomSync - shared auth logic

// =====================
// REGISTER USER
// =====================
function registerUser() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (!user || !pass) {
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("roomsync_users")) || [];

    // check if username already exists
    let exists = users.find(u => u.username === user);
    if (exists) {
        alert("Username already exists!");
        return;
    }

    users.push({ username: user, password: pass });
    localStorage.setItem("roomsync_users", JSON.stringify(users));

    alert("Account created successfully!");
    window.location.href = "login.html";
}


// =====================
// LOGIN USER
// =====================
function loginUser() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (!user || !pass) {
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("roomsync_users")) || [];

    let foundUser = users.find(u => u.username === user && u.password === pass);

    if (!foundUser) {
        alert("❌ No account found or wrong password!");
        return;
    }

    localStorage.setItem("roomsync_loggedIn", JSON.stringify(foundUser));

    alert("Login successful!");

    window.location.href = "dashboard.html";
}


// =====================
// GET CURRENT USER
// =====================
function getCurrentUser() {
    return JSON.parse(localStorage.getItem("roomsync_loggedIn"));
}


// =====================
// LOGOUT USER
// =====================
function logoutUser() {
    localStorage.removeItem("roomsync_loggedIn");
    window.location.href = "login.html";
}


// =====================
// PROTECT DASHBOARD PAGE
// =====================
function protectPage() {
    let user = getCurrentUser();

    if (!user) {
        alert("Please login first!");
        window.location.href = "login.html";
    }
}
