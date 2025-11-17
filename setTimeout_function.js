console.log("Process started...");

setTimeout(() => {
  console.log("Fetching data from server...");
}, 2000); // after 2 seconds

setTimeout(() => {
  console.log("Data received successfully!");
}, 4000); // after 4 seconds
