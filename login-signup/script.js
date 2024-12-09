
const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(username.value);
    console.log(password.value);
});