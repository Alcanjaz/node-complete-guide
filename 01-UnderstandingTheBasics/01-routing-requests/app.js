const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url; //request url
  const method = req.method; //request method
  if (url === '/') { 
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end(); //close the response and stop checking
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY'); //create a file
    res.statusCode = 302; //status code for redirect
    res.setHeader('Location', '/'); //send the location to redirect to the browser
    return res.end(); //close the response and stop checking
  } //else
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
