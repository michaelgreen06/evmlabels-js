import express from "express";

const port = 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req, res);
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});

[
  {
    parent: coinbase,
    nametags: {
      nametag1: "aave_hot_1",
      nametag2: "prime funder",
    },
  },
  {
    parent: binance,
    nametags: {
      nametag1: "cex account 1",
      nametag2: "prime dunder",
    },
  },
];
