const fs=require('fs');
const math = require('./math');

fs.writeFile('./test.txt','Hello World',()=>{})

console.log(__filename,__dirname);

console.log(math.add(1,2))
//jo udhar ka exports me hai vo yaha k require me chlega
