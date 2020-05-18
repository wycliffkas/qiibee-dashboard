const { check } = require("express-validator");
const { createCustomer, createBrand } = require("./user.controller");
const { isEmailInUse } = require("./user.service");
const router = require("express").Router();

router.post("/customer", createCustomer);
router.post("/brand", createBrand);

// router.post(
//   "/brand",
//   [
//     check("email")
//       .custom(async (email) => {
//         const value = await isEmailInUse(email);
//         console.log("value", value)
//         if (value[0].total > 0) {
//           throw new Error("Email is already exists!!!");
//         }
//         return true;
//       })
//       .withMessage("Invalid email address!!!"),
//   ],
//   createBrand
// );

module.exports = router;
