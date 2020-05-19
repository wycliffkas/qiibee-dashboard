module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      verify(token, process.env.JWT_KEY, (error, decoded) => {
        if (error) {
          return res.status(404).json({
            success: 0,
            message: "Invalid Token",
          });
        } else {
          next();
        }
      });
    } else {
      return res.status(404).json({
        success: 0,
        message: "Access denied! unauthorized user",
      });
    }
  },
};
