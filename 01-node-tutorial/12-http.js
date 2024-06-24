const http = require("http");
const url = require("url");
const querystring = require("querystring");

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;

  // Handle GET requests
  if (req.method === "GET") {
    if (pathname === "/") {
      // Respond with a simple message
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to the simple HTTP server!\n");
    } else if (pathname === "/guess") {
      // Serve the number guessing game form
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`
        <html>
        <head><title>Number Guessing Game</title></head>
        <body>
          <h1>Guess a number between 1 and 100:</h1>
          <form action="/guess" method="post">
            <input type="number" name="guess" min="1" max="100" required>
            <button type="submit">Submit</button>
          </form>
        </body>
        </html>
      `);
      res.end();
    } else {
      // Handle 404 Not Found
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found\n");
    }
  }

  // Handle POST requests
  else if (req.method === "POST" && pathname === "/guess") {
    // Read data from the request
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Process data once the entire body has been received
    req.on("end", () => {
      const formData = querystring.parse(body);
      const userGuess = parseInt(formData.guess);

      // Generate a random number (1 to 100)
      const randomNumber = Math.floor(Math.random() * 100) + 1;

      // Determine if the guess is correct, too low, or too high
      let message;
      if (userGuess === randomNumber) {
        message = "Congratulations! You guessed the correct number.";
      } else if (userGuess < randomNumber) {
        message = "Your guess is too low. Try again!";
      } else {
        message = "Your guess is too high. Try again!";
      }

      // Respond with the result
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`
        <html>
        <head><title>Number Guessing Game</title></head>
        <body>
          <h1>${message}</h1>
          <p>The correct number was ${randomNumber}.</p>
          <form action="/guess" method="post">
            <input type="number" name="guess" min="1" max="100" required>
            <button type="submit">Submit</button>
          </form>
        </body>
        </html>
      `);
      res.end();
    });
  }
});

// Start the server and listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

