var http = require("http");
var mysqlConn = require("./mysql.connection");

var server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    mysqlConn.getUser("SELECT * FROM T_USER", 
            (err, result) => {
                if (err) {
                    response.end(err || err.message);
                }
                response.end(JSON.stringify(result));
            });
}).listen(8888);

console.log("server is running at localhost:8888");
