const fs = require("fs");

// non-blocking io model- Async.
fs.writeFile("employee.txt", "Backend end engineer, react developer", () => {
  console.log("Data is successfuly added");
});

// sync

fs.writeFileSync("empName.txt", "John,Traversy,smith");

// Reading from file

fs.readFile("employee.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error in reading the file", err);
  }
  console.log("Reading from file : ", data);
});

// Append
fs.appendFile("employee.txt", "Full stack Dev", (err) => {
  console.log(err);
});

// Rename :  fs.rename

// Delete
fs.unlink("empName.txt", (err) => {
 if(err){
    console.log("error in deleting file", err);
 }
console.log("file deleted");
});
