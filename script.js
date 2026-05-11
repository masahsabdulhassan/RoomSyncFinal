function loginUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Basic validation
    if (user.trim() === "" || pass.trim() === "") {
        alert("Please fill all fields");
        return false;
    }

    // Simulated login success
    alert("Login successful!");

    // Redirect to dashboard
    window.location.href = "dashboard.html";

    return false;
}


// Improved filtering system for search page
function filterUsers() {
    let filter = document.getElementById("filter").value;
    let users = document.querySelectorAll(".user");

    users.forEach(user => {

        let cleanLevel = user.dataset.clean;

        if (filter === "all") {
            user.style.display = "block";
        }
        else if (cleanLevel === filter) {
            user.style.display = "block";
        }
        else {
            user.style.display = "none";
        }
    });
}
