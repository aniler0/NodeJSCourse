const os = require('os')

//platform
console.log(os.platform());

//cpu arch
console.log(os.arch());

//CPU core info
console.log(os.cpus())

//free memory
console.log(os.freemem())

//total memory
console.log(os.totalmem())

//uptime
console.log(os.uptime());