const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const requestHandler = (req, res) => {
  const { url } = req;
  console.log(url)
  if (url.includes('/home')) { 
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>Hello World</h1>');
  }


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('<h1>Hello World</h1>');
}

const server = createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
