// =======================
// REGISTER
// =======================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoomSync - Register</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="register-container">
    <h1>RoomSync</h1>
    <p>Create your account</p>

    <form onsubmit="return registerUser()">

        <input type="text" id="username" placeholder="Username" required>
        <br><br>

        <input type="password" id="password" placeholder="Password" required>
        <br><br>

        <input type="password" id="confirmPassword" placeholder="Confirm Password" required>
        <br><br>

        <input type="number" id="budget" placeholder="Monthly Budget ($)" required>
        <br><br>

        <input type="text" id="location" placeholder="Preferred Location" required>
        <br><br>

        <label for="cleanliness">Cleanliness Level:</label>
        <select id="cleanliness" required>
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>

        <br><br>

        <button type="submit">Create Account</button>
    </form>

    <p>
        Already have an account? <a href="login.html">Login here</a>
    </p>
</div>

<script>
function registerUser() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let budget = document.getElementById("budget").value;
    let location = document.getElementById("location").value.trim();
    let cleanliness = document.getElementById("cleanliness").value;

    // Validation
    if (!username || !password || !confirmPassword || !budget || !location || !cleanliness) {
        alert("Please fill out all fields!");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // Get existing users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate username
    let exists = users.find(u => u.username === username);
    if (exists) {
        alert("Username already exists!");
        return false;
    }

    // Save user
    users.push({
        username,
        password,
        budget,
        location,
        cleanliness
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    window.location.href = "login.html";
    return false;
}
</script>

</body>
</html>

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
