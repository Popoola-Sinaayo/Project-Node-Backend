const ErrorHandler = (req, res, next) => {
  console.log(req);
  console.log(next);
  return res.json({ message: "error" });
};

module.exports = ErrorHandler