const valid = ({ fullname, username, email, password, cf_password }) => {
  const err = {};

  //   fullname
  if (!fullname) {
    err.fullname = 'Please add your full name';
  } else if (fullname.length > 25) {
    err.fullname = 'Full name is not up to 25 character long';
  }

  //   username
  if (!username) {
    err.username = 'Please add your username';
  } else if (username.toLowerCase().replace(/ /g, '').length > 25) {
    err.username = 'Username is not up to 25 character long';
  }

  // email
  if (!email) {
    err.email = 'Please add your email';
  } else if (!validateEmail(email)) {
    err.email = 'Email format is incorrect';
  }

  // password
  if (!password) {
    err.password = 'Please add your password';
  } else if (password.length < 6) {
    err.password = 'Password must be at least 6 characters';
  }

  // confirm password
  if (password !== cf_password) {
    err.cf_password = 'Confirm Password did not match';
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  };
};

// =========
// EMAIL VALIDATION (REGEX Validation)

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export default valid;
