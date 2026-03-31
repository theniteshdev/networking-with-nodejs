import http from "node:http"

const app = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });
    res.end("Hello World 😄 !!");
});


app.listen(80, function (err) {
    if (!err) {
        console.log("Server Up!")
    }
});