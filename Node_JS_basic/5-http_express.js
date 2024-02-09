const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const filePath = process.argv[2];

    countStudents(filePath)
      .then(result => {
        const responseText = `This is the list of our students\n${JSON.stringify(result, null, 2)}`;
        res.end(responseText);
      })
      .catch(error => {
        res.statusCode = 500;
        res.end(`Internal Server Error: ${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
