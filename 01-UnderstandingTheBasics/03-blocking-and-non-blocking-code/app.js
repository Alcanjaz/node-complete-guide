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
    const body = [];

    req.on("data", (chunk) => { //Event listener for data event
      console.log(chunk);
      body.push(chunk); //push the data chunk to the body request array
    });

    req.on("end", () => { //Event listener for end event
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      /**
      //fs.writeFileSync('message.txt', message); works synchronously, and slows down the server
      if we must to take multiple files and requests. To fix that, we must to work asynchrously 
      and avoid to stop the rest of code execution
      **/
      fs.writeFile("message.txt", message, () => {
        res.statusCode = 302; //status code for redirect
        res.setHeader('Location', '/'); //send the location to redirect to the browser
        return res.end(); //close the response and stop checking
      }); 
      /*this function takes a callback as third parameter 
        which will run when this function runs,
        avoiding to block the code execution*/
    });
 

  } //else
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
