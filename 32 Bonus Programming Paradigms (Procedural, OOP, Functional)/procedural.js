const form = document.getElementById('user-input');

function signUpHandler(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username');
  const enteredUsername = usernameInput.value;

  const passwordInput = document.getElementById('password');
  const enteredPassword = passwordInput.value;

  if (enteredUsername.trim().length === 0) {
    alert('Invalid input - username must not be empty!');
    return;
  }

  if (enteredPassword.trim().length <= 5) {
    alert('Invalid input - password must be six characters or longer.');
    return;
  }

  const user = {
    username: enteredUsername,
    password: enteredPassword
  };

  console.log(user);
  console.log(`Hi, i am ${user.username}`);
}

form.addEventListener('submit', signUpHandler);
