#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const outputfile = process.argv[3];

request(url, (err, reponse) => {
    const fs = require('fs');
    if (err) { console.error(err); }
    fs.writeFile(outputfile, reponse.body, 'utf-8', (err) => {
        if (err) {
            console.error(err);
        }
    });
});
