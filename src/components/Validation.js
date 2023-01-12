export const validateInput = (text, regex, error, invalidErrorStr) => {
  if (text === null || text === '') {
    error = `This feild can't be empty`;
    return false;
  } else if (!text.match(regex)) {
    error = invalidErrorStr;
    return false;
  } else {
    return true;
  }
};

export const validateConfirmPassword = (
  text,
  password,
  error,
  invalidErrorStr,
) => {
  if (text === null || text === '') {
    error = `This feild can't be empty`;
    return false;
  } else if (text !== password) {
    error = invalidErrorStr;
    return false;
  } else {
    return true;
  }
};
