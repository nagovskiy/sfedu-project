const registerBtn = document.getElementById('registerBtn');
const registerModal = document.getElementById('registerModal');
const closeBtn = document.querySelector('.close-btn');
const successModal = document.getElementById('successModal');
const okBtn = document.getElementById('okBtn');
const registerForm = document.getElementById('registerForm');

registerBtn.onclick = function() {
    registerModal.style.display = 'flex';
}

closeBtn.onclick = function() {
    registerModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === registerModal) {
        registerModal.style.display = 'none';
    }
}

registerForm.onsubmit = function(event) {
    event.preventDefault();

    registerModal.style.display = 'none';

    successModal.style.display = 'flex';
}

okBtn.onclick = function() {
    successModal.style.display = 'none';
}
