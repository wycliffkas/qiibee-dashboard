const { createCustomer, createBrand, isEmailInUse } = require("./user.service");
const { hashSync, genSaltSync } = require("bcrypt");

module.exports = {
  createCustomer: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    createCustomer(body, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
        message: "Customer has been successfully added",
      });
    });
  },
  createBrand: (req, res) => {
    console.log("calling controller");
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    createBrand(body, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
        message: "Brand has been successfully added",
      });
    });
  },
};
