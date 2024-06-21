function validation(values) {
  // Create function to handle input fields validation

  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const name_pattern = /^[a-zA-Z\s-]{1,50}$/;

  // Condition to check if email field is empty and return error message
  if (values.email === "") {
    errors.email = "Field cannot be empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Enter a valid email";
  }

  // Function to check name validation on input
  if (values.name === "") {
    errors.name = "Please enter your full name";
  } else if (!name_pattern.test(values.name)) {
    errors.name = "Please use a valid name";
  }

  return errors;
}

export default validation;
