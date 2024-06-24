console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)

/////////////////////////
// Log the value of __dirname
console.log("__dirname:", __dirname);

// Log the value of the environment variable MY_VAR
console.log("process.env.MY_VAR:", process.env.MY_VAR);

// Log some other useful globals
console.log("__filename:", __filename);
console.log("process.cwd():", process.cwd());
console.log("process.version:", process.version);
console.log("process.platform:", process.platform);
console.log("process.memoryUsage():", process.memoryUsage());