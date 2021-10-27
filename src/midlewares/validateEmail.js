const emailValidation = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
  
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid entries. Try again.' });
    }
  
    next();
  };
  module.exports = emailValidation;