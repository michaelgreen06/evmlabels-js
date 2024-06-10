import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;
const app = express();
app.use(express.json());

//req.body.address will have the address that needs to be searched for
app.post("/", (req, res) => {
  //todo validation - if the address isn't a certain format 0x... return a 400 w/ 'incorrect format'
  const searchAddress = req.body.address;
  if (!searchAddress) {
    return res.status(400).json({ error: "address is required" });
  }
  const jsonFiles = ["1inch.json", "aave.json"];
  const results = [];

  jsonFiles.forEach((file) => {
    const filePath = path.join(__dirname, file);
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    if (JSON.stringify(data).includes(searchString)) {
      results.push(file);
    }
  });

  res.json({ filesContainingString: results });
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});

//Thinking about the JSON structure of the  response
// [
//   {
//     parent: coinbase,
//     nametags: {
//       nametag1: "aave_hot_1",
//       nametag2: "prime funder",
//     },
//   },
//   {
//     parent: binance,
//     nametags: {
//       nametag1: "cex account 1",
//       nametag2: "prime dunder",
//     },
//   },
// ];
