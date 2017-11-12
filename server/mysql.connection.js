var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'writ0gether'
});

connection.connect();

// connection.query("SELECT * FROM T_USER", 
//     (err, result) => {
//         if (err) {
//             console.log(err || err.message);
//             return;
//         }
//         console.log(JSON.stringify(result));
// });

function getUser(sql, func){
    return connection.query(sql, func);
}

module.exports = {
    connection: connection,
    getUser: getUser
}