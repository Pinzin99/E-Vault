 let entries = [
    { id: 1, site: "GitHub", user: "you@example.com", pass: "gh_9fK!2xLq", revealed: false, createdAt: 1 },
    { id: 2, site: "Gmail", user: "yourname@gmail.com", pass: "Mzt#7pLwQe1", revealed: false, createdAt: 2 },
    { id: 3, site: "Netflix", user: "admin", pass: "admin", revealed: false, createdAt: 3 },
  ];
  let nextId = 4;
  let createdCounter = 4;
  let editingId = null


const loginBtn = document.querySelectorAll('.btn-nav-login, .btn-hero-primary');


loginBtn.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'login.html'
    })
});

console.log(loginBtn);

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault()

    const usernameInput = document.getElementById('user-name').value;
    const passwordInput = document.getElementById('master-pass').value;

    const users = entries;

    const validUser = users.find(
        (user) => user.user === usernameInput && user.pass === passwordInput
    );

    if (validUser) {
        window.location.href = 'dashboard.html'
    } else {
        const loginError = document.getElementById('login-error');
        loginError.style.display = 'block';
    }

})

const clearError = () => {
    const loginError =document.getElementById('login-error');
    if (loginError) loginError.style.display = "none"
}

document.getElementById('user-name').addEventListener('click', clearError);
document.getElementById('master-pass').addEventListener('click', clearError);

const addEntryBtn = document.getElementById('add-entry-btn');
const showAdd = document.getElementById('modal-overlay');

addEntryBtn.addEventListener('click', function () {
    showAdd.style.display = 'block';
});

console.log('script')