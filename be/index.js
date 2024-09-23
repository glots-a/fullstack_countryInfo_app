const express = require("express");
const cors = require("cors");
const controler = require("./src/controlers/controler");

const PORT = 3001;
const app = express();

app.use(express.json());

app.get("/countries", cors(), controler.countries);

app.get("/countries/:countryCode", cors(), controler.info);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
