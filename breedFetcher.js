const request = require("request");
const userInput = process.argv.slice(2).join("");
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${userInput}`,
  (err, res, body) => {
    if (err) {
      throw err;
    }
    const response = JSON.parse(body);
    if (!response[0]) {
      console.log("Breed not found");
    } else {
      const output = response[0].description;
      console.log(output);
    }
  }
);
