const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/* Middleware */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import the inventory list from data.js and sort it by priority using the array below as reference
const inventoryList = require("./data.js");

const brandPriority = [
  { brand: "GOODYEAR", priority: 0 },
  { brand: "DUNLOP", priority: 1 },
  { brand: "TOYO", priority: 2 },
  { brand: "CONTINENTAL", priority: 3 },
  { brand: "MAXXIS", priority: 4 },
  { brand: "DOUBLESTAR", priority: 5 },
];

// let sortedInventory = [];
// console.log("Sorted Inventory: ", ...inventoryList.inventory);

const invData = inventoryList.inventory;

const sortedInventory = invData.filter((el) => {
  return brandPriority.some((f) => {
    f.brand === el.brand;
  });
});

console.log("sortedInventory: ", sortedInventory);

const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
