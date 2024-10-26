const user = JSON.parse(localStorage.getItem('user'));
let S_log = document.querySelector('#have-acc')
let L_sgin = document.querySelector('p span')
console.log(L_sgin);

let log = ()=>{
  window.location.href = 'signUp.html';
}
L_sgin.addEventListener('click',()=>{
  window.location.href = 'signUp.html';
})
S_log.addEventListener('click',()=>{
  window.location.href = 'Home.html';
})
console.log(user); 
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let isValid = validateForm();
  if (isValid) {
    // Save the user data to local storage
    const userData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Signup successful! Your data has been saved to local storage.');
    // Optionally reset the form after saving
    document.getElementById('signupForm').reset();
    window.location.href = 'Home.html';
  }
});

function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let nameError = document.getElementById('nameError');
  let emailError = document.getElementById('emailError');
  let passwordError = document.getElementById('passwordError');

  
  // Reset previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  let valid = true;

  if (name.trim() === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  }

  if (email.trim() === '') {
    emailError.textContent = 'Email is required';
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.textContent = 'Invalid email address';
    valid = false;
  }

  if (password.trim() === '') {
    passwordError.textContent = 'Password is required';
    valid = false;
  } else if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    valid = false;
  }

  return valid;
}

function login() {
  const email = document.getElementById('email')
  const password = document.getElementById('password');
  
  if (user.email == email.value && user.password == password.value) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'Home.html';
  } else {
    alert('password is wrong');
  }
}
