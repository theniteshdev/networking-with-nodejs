import http from 'node:http'

const app = http.createServer((req, res) => {
    res.end("Hello World !");
})


app.listen(5500, "theniteshdev", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("server up")
    }
})