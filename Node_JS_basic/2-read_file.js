const fs = require('fs');

function countStudents(path) {
  try {
    const stddata = fs.readFileSync(path, 'utf8');
    const stdSlipt = stddata.split('\n').slice(1);

    console.log(`Number of students: ${stdSlipt.length}`);

    const field = {};

    stdSlipt.forEach((e) => {
      const stdValue = e.split(',');
      const key = stdValue[stdValue.length];

      if (!Object.keys(field).includes(key)) {
        field[key] = [];
        field[key].push(stdValue[0]);
      } else {
        field[key].push(stdValue[0]);
      }
    });

    for (const [key, obj] of Object.entries(field)) {
      console.log(`Number of students in ${key}: ${obj.length}. List: ${obj.join(', ')}`);
    }
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = countStudents;
