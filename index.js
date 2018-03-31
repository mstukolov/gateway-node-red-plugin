const http = require('http');

const name = 'gateway-node-red-plugin';
const port = '8888';

const app = new http.Server();

app.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is gateway-node-red-plugin');
    res.end('\n');
});

app.listen(port, () => {
    console.log(`${name} is listening on port ${port}`);
});