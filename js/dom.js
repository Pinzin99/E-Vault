 let entries = [
    { id: 1, site: "GitHub", user: "you@example.com", pass: "gh_9fK!2xLq", revealed: false, createdAt: 1 },
    { id: 2, site: "Gmail", user: "yourname@gmail.com", pass: "Mzt#7pLwQe1", revealed: false, createdAt: 2 },
    { id: 3, site: "Netflix", user: "you@example.com", pass: "Sn0wf1eld$", revealed: false, createdAt: 3 },
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