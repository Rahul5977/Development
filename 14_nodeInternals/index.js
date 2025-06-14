const fs = require("fs");
const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate in fs"));

fs.readFile("sample.txt", "utf-8", (err, data) => {
  setTimeout(() => console.log("setTimeout in fs"), 0);
  setImmediate(() => console.log("setImmediate in fs"));
  const start = Date.now();
  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}]: password 1 Hashed`);
  });
  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}]: password 2 Hashed`);
  });
  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}]: password 3 Hashed`);
  });
  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}]: password 4 Hashed`);
  });
  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}]: password 5 Hashed`);
  });
  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}]: password 6 Hashed`);
  });
});
