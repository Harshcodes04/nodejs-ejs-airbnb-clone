const path = require("path");
const fs = require("fs");
const rootsDir = require("../utils/pathUtils");
module.exports = class Home {
  constructor(houseName, price, address, ratings, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.address = address;
    this.ratings = ratings;
    this.photoUrl = photoUrl;
  }
  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootsDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (err) => {
        if (err) console.log("Error", err);
        console.log("File writting concluded");
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootsDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      if (!err) callback(JSON.parse(data));
      else callback([]);
    });
  }
};
