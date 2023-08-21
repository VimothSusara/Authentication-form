function validation(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;

  if (values.firstName === "") {
    error.firstName = "first name is empty!";
  } else {
    error.firstName = "";
  }

  if (values.lastName === "") {
    error.lastName = "last name is empty!";
  } else {
    error.lastName = "";
  }

  if (values.email === "") {
    error.email = "Email is empty!";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email does not match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password is empty!";
  } else if (!password_pattern.test(values.password)) {
    error.password = "password does not match";
  } else {
    error.password = "";
  }
  return error;
}

export default validation;
