import http from 'node:http'

const app = http.createServer(handleApp);
const ip = "0.0.0.0";
const port = 8000;
// 
function handleApp(req, res) {
    try {
        console.log("Imcoming Request.");
        res.end("this Sever is running on 16Million IP");
    } catch (error) {
        res.end(error.message);
    }
};

function handleServer(err) {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Running...")
    }
}

app.listen(port, ip, handleServer);