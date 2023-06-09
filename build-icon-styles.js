const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, 'icons');
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    let content = '.untlt-ic{ width: 1em; height: 1em; background-position: 0 0; background-size: contain; color: inherit; display: inline-block;}\n'
    files.forEach(function (file) {
        let name = file.replace(".svg", "")
        content += `.${name}{ background-image: url('icons/${file}')}\n`
    });

    fs.writeFile('./src/icons.css', content, err => {
        if (err) {
          console.error(err);
        }
      });
});