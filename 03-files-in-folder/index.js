const fs = require('fs');
const path = require('path');

fs.readdir(path.resolve(__dirname, 'secret-folder'), (err, data) => {
  if (err) {
    console.error(err);
  }
  data.forEach(file => {
    fs.promises.stat(path.resolve(__dirname, 'secret-folder', file))
      .then(statFile => {
        if (statFile.isFile()) {
          console.log(path.basename(file).split('.').slice(0, 1) + ' - ' + path.extname(file).split('.').slice(1, 2) + ' - ' + Math.ceil((statFile.size) / 1000) + 'kb');
        }
      })
  })
})
