const app = require("./src/app.js");
const http = require("http");

const server = http.createServer(app);
server.listen(5000, () => {
    console.log("server started at 5000");
});
