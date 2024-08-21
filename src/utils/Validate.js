const Validate = (email, password) => {
  const emailIsValid = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordIsValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!emailIsValid) return "❌ Email is not Valid";
  if (!passwordIsValid) return "❌ Password is not Valid";
};

export default Validate;
