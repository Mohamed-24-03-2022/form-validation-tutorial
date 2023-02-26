const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');
const email = inputs[0];
const country = inputs[1];
const zipCode = inputs[2];
const password = inputs[3];
const passConfirmation = inputs[4];
const error = document.querySelector('#error');

const passwordValidation = () => {
  if (
    passConfirmation.validity.valueMissing &&
    !password.validity.valueMissing
  ) {
    passConfirmation.setCustomValidity('Fill this information');
    passConfirmation.reportValidity();
  } else if (passConfirmation.value !== password.value) {
    password.setCustomValidity('Password does not match');
    passConfirmation.setCustomValidity('Password does not match');
    passConfirmation.reportValidity();
  } else if (passConfirmation.value === password.value) {
    password.setCustomValidity('');
    passConfirmation.setCustomValidity('');
  }

  if (password.validity.tooShort) {
    password.setCustomValidity('The password must be at least 8 characters.');
    password.reportValidity();
  } else if (password.validity.valueMissing) {
    password.setCustomValidity('Fill this information');
    password.reportValidity();
  } else {
    password.setCustomValidity('');
  }
};

const zipCodeValidation = () => {
  if (zipCode.validity.valueMissing) {
    zipCode.setCustomValidity('Please enter a zip code number');
    zipCode.reportValidity();
  } else if (
    zipCode.validity.rangeOverflow ||
    zipCode.validity.rangeUnderflow
  ) {
    zipCode.setCustomValidity(
      'Please enter a valid zip code number (max 5 digits)'
    );
    zipCode.reportValidity();
  } else {
    zipCode.setCustomValidity('');
  }
};

const countryValidation = () => {
  if (country.validity.valueMissing) {
    country.setCustomValidity('Please enter a country name');
    country.reportValidity();
  } else if (country.validity.patternMismatch) {
    country.setCustomValidity('Please enter a valid country name');
    country.reportValidity();
  } else {
    country.setCustomValidity('');
  }
};

const emailValidation = () => {
  if (email.validity.valueMissing) {
    email.setCustomValidity('Please enter an address');
    email.reportValidity();
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity('Please enter a valid address');
    email.reportValidity();
  } else if (!email.validity.typeMismatch) {
    email.setCustomValidity('');
  }
};

const checkVal = () => {
  // password validation
  passwordValidation();

  // zipCode validation
  zipCodeValidation();

  // country validation
  countryValidation();

  // email validation  - set it last
  // so it will show the report first
  emailValidation();
};

btn.addEventListener('click', (e) => {
  checkVal();
  e.preventDefault();
});

inputs.forEach((input) => {
  input.addEventListener('change', () => {
    checkVal();
  })
});
