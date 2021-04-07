const fs = require("fs");

const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form>`
    );
    return res.end();
  }

  if (url === "/message") {
    const body = [];
    req.on("data", (chunk) => {
      //   console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      //   console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.writeHead(302, { location: "/" });
        // res.status = 302;
        // res.setHeader("Location", "/");
        res.end();
      });
    });
  }

  // process.exit()
};

module.exports = routeHandler;
