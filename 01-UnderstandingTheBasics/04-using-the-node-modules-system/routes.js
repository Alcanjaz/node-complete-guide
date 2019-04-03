const fs = require('fs');

const requestHandler = (req, res) => {

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
    
        return req.on("end", () => { //Event listener for end event
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          
          /*this function takes a callback as third parameter 
            which will run when this function runs,
            avoiding to block the code execution*/
          fs.writeFile("message.txt", message, () => {
            res.statusCode = 302; //status code for redirect
            res.setHeader('Location', '/'); //send the location to redirect to the browser
            return res.end(); //close the response and stop checking
          }); 
        })
      } //else
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>My First Page</title><head>');
      res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
      res.write('</html>');
      res.end();
};

//module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: "Some hard coded text"
// };

// module.exports.handler = requestHandler;
// module.exports.text = "Some text";

exports.handler = requestHandler;
exports.text = "Some hard coded text";