// testing our firewall
import http from 'node:http'

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");


    res.end(JSON.stringify({
        "message": "Server is working fine.",
        "success": "true",
        "end": "Response 🏁"
    }))
});


server.listen(80, "0.0.0.0", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(server.address());
    }
})