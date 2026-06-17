export const validateLogin = (data) => {
  const errors = {};

  if (!data.email.trim()) {
    errors.email = "Email is required";
  }

  if (!data.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};

export const validateRegister = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  }

  if (!data.password.trim()) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password =
      "Password must be at least 6 characters";
  }

  return errors;
};