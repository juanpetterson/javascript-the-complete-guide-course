const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  } else if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function getUserInput(inputElementId) {
  //can check if it is an input
  return document.getElementById(inputElementId).value;
}

function createUser(username, password) {
  if (!validate(username, REQUIRED) || !validate(password, MIN_LENGTH, 5)) {
    throw new Error(
      'Invalid input - username or password is wrong(password should be at least six characters)'
    );
  }

  return {
    username,
    password
  };
}

function greetUser(user) {
  console.log(`Hi, Im ${user.username}`);
}

function signUpHandler(event) {
  event.preventDefault();

  const enteredUsername = getUserInput('username');
  const enteredPassword = getUserInput('password');

  try {
    const newUser = createUser(enteredUsername, enteredPassword);
    console.log(newUser);
    greetUser(newUser);
  } catch (error) {
    alert(error.message);
  }
}

function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signUpHandler);
