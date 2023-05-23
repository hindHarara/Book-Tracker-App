const { dbConnection } = require("../configurations");
const { userValidator, loginValidator } = require("../validators");
const { hashSync, compareSync } = require("bcryptjs");
class User {
  constructor(userData) {
    this.userData = userData;
  }

  save(cb) {
    dbConnection("users", async (collection) => {
      try {
        const hashPassword = hashSync(this.userData.password);
        this.userData.password = hashPassword;

        await collection.insertOne(this.userData);
        cb({
          status: true,
        });
      } catch (err) {
        cb({
          status: false,
          message: err.message,
        });
      }
    });
  }

  isExist() {
    return new Promise((resolve, reject) => {
      dbConnection("users", async (collection) => {
        try {
          const user = await collection.findOne({ email: this.userData.email });
          if (!user) {
            resolve({
              check: false,
            });
          } else {
            if (user.email === this.userData.email) {
              resolve({
                check: true,
                message: "The email is already used",
              });
            }
          }
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  //static because validate process is constant
  static validate(userData) {
    try {
      const validateResult = userValidator.validate(userData);
      return validateResult;
    } catch (err) {
      return false;
    }
  }
  static login(loginData) {
    return new Promise((resolve, reject) => {
      const validation = loginValidator.validate(loginData);
      if (validation.error) {
        resolve({
          status: false,
          message: validation.error.message,
          code: 400,
        });
      }
      dbConnection("users", async (collection) => {
        try {
          const user = await collection.findOne({
            email: loginData.email,
          });
          if (user) {
            if (compareSync(loginData.password, user.password)) {
              resolve({
                status: true,
                data: user,
              });
            }
          }
          resolve({
            status: false,
            code: 401,
            message: "login Failed",
          });
        } catch (err) {
          reject({
            status: false,
            message: err.message,
          });
        }
      });
    });
  }
}
module.exports = User;
//const userData= {
//              name:"Amal",
//              email: "amal@a.com",
//              password: "1231Hkm23"
//              }
//const user = new User(userData);
//user.save();
//const vResult = user.validate(userData)
//console.log(vResult)
