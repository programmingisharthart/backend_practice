const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Welcome to our homepage");
      break;
    case "/about":
      res.end("Here is our short history");
      break;

    default:
      res.end(`
      <h1>Opps!</h1>
      <p>404 page not found</p>
      <a href="/">go back home</a>
      `);
      break;
  }
});

server.listen(5000);
