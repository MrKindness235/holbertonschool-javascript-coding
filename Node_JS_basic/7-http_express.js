const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const filePath = process.argv[2];

  countStudents(filePath)
    .then(result => {
      const responseText = `This is the list of our students\n${JSON.stringify(result, null, 2)}`;
      res.type('text').send(responseText);
    })
    .catch(error => {
      res.status(500).send(`Internal Server Error: ${error.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
