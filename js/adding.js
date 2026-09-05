const addEntryBtn = document.getElementById('add-entry-btn');
const showAdd = document.getElementById('modal-overlay');
const logout = document.getElementById('logout-btn');
const close = document.getElementById('modal-close');

addEntryBtn.addEventListener('click', function () {
    showAdd.style.display = 'block';
});

logout.addEventListener('click', () => {
    window.location.href = '/'
})

close.addEventListener('click', function () {
    showAdd.style.display = 'none'
})

