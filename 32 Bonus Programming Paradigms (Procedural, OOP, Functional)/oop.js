class Validator {
  static REQUIRED = 'REQUIRED';
  static MIN_LENGTH = 'MIN_LENGTH';

  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    } else if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  greet() {
    console.log(`Hi, Im ${this.username}`);
  }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById('user-input');
    this.usernameInput = document.getElementById('username');
    this.passwordInput = document.getElementById('password');

    this.form.addEventListener('submit', this.signUpHandler.bind(this));
  }

  signUpHandler(event) {
    event.preventDefault();
    const enteredUsername = this.usernameInput.value;
    const enteredPassword = this.passwordInput.value;

    if (
      !Validator.validate(enteredUsername, Validator.REQUIRED) ||
      !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
    ) {
      alert(
        'Invalid input - username or password is wrong(password should be at least six characters)'
      );
      return;
    }

    const newUser = new User(enteredUsername, enteredPassword);
    console.log(newUser);
    newUser.greet();
  }
}

new UserInputForm();
