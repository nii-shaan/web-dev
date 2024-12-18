const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = JSON.parse(localStorage.getItem("email"));
    const password = JSON.parse(localStorage.getItem("password"));

    if (!email || !password) {
        alert("login failed");
    } else {
        localStorage.setItem("email", JSON.stringify(email.value));
        localStorage.setItem("password", JSON.stringify(password.value));
    }
});
