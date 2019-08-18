if (process.env.NODE_ENV === "production") {
  //Return the prod set of keys
  module.exports = require("./prod");
} else {
  //Return the dev set of keys
  module.exports = require("./dev");
}
