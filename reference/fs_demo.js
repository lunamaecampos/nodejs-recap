const fs = require('fs');
const path = require('path');

// Create Folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if(err) throw err;
//   console.log('Folder created...');
// });

// Create and write to file
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'I love Node.js',
  (err)=>{
    if(err) throw err;
    console.log('File written to...');
  }
);
