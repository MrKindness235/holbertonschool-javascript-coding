const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
          reject(new Error('No valid student data found in the database'));
        } else {
          const header = lines[0].split(',');
          const students = lines.slice(1);

          const result = {
            totalStudents: students.length,
          };

          header.forEach((field, index) => {
            const fieldStudents = students.map(student => student.split(',')[index].trim()).filter(Boolean);
            result[`studentsIn${field}`] = fieldStudents.length;
            result[`listOf${field}`] = fieldStudents.join(', ');
          });

          console.log(result);
          resolve(result);
        }
      }
    });
  });
}
