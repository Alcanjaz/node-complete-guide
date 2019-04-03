const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') { 
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="message" placeholder="Username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); //close the response and stop checking
    }
    if (url === '/users') { 
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>User1</li>');
        res.write('<li>User2</li>');
        res.write('<li>User2</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end(); //close the response and stop checking
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
    
        req.on("data", (chunk) => { //Event listener for data event
          body.push(chunk); //push the data chunk to the body request array
        });
    
        return req.on("end", () => { //Event listener for end event
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          console.log(message);

          res.statusCode = 302; //status code for redirect
          res.setHeader('Location', '/'); //send the location to redirect to the browser
          return res.end(); //close the response and stop checking
        });
      }
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>My First Page</title><head>');
      res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
      res.write('</html>');
      res.end();
}

exports.handler = requestHandler;