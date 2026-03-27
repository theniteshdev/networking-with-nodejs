import http from "http";

const server = http.createServer(handleServer);
let ip = "127.200.200.200"
let port = "3000"
function handleServer(req, res) {
    try {
        res.end(`Server's IP: ${ip};`);
    } catch (error) {
        return res.end(error.message);
    }
};

server.listen(port, ip, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Server running fine.");
        console.log(`server's ip: ${ip}`);
    }
})