import http from "node:http";

const app = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });
    res.end('Hello from thenitesh 😄🔥');
});

app.listen(5500, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('app is running on every ip.')
        console.log(app.address())
    }
});
