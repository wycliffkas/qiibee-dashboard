const pool = require("../../config/database");

module.exports = {
  createCustomer: (data, callBack) => {
    let sql =
      "insert into customers(firstName, lastName, email) values (?, ?, ?)";
    let sql2 = "insert into users(email, password, type) values (?, ?, ?)";
    let insert = [data.first_name, data.last_name, data.email];
    let insert2 = [data.email, data.password, "customer"];

    pool.query(sql, insert, (error, results, fields) => {
      if (error) {
        return callBack(error);
      } else {
        pool.query(sql2, insert2, (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results);
        });
      }
    });
  },
  createBrand: (data, callBack) => {
    let sql = `insert into brands(brandName, brandSymbol, loyaltyPoints, email) values (?, ?, ?, ?)`;
    let sql2 = `insert into users(email, password, type) values (?, ?, ?)`;
    let insert = [
      data.brand_name,
      data.brand_symbol,
      data.loyalty_points,
      data.email,
    ];
    let insert2 = [data.email, data.password, "brand"];

    pool.query(sql, insert, (error, results, fields) => {
      if (error) {
        return callBack(error);
      } else {
        pool.query(sql2, insert2, (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results);
        });
      }
    });
  },
  isEmailInUse: (email, callBack) => {
    pool.query(
      `SELECT COUNT(*) AS total FROM users WHERE email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
          // console.log("EMAIL COUNT : " + results[0].total);
          // results = results[0].total > 0;
        }
        return callBack(null, results);
      }
    );
  },
  getUserByEmail: (email, callBack) => {
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
