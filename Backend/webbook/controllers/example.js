/* const data = { "witness_id": "1231236", "name": "name", "email": "email2352", "place": "place", "profession": "profession" } */
const mysql = require('mysql');
const connection = mysql.createConnection({
    connectionLimit: 100,
    host: 'remotemysql.com',
    user: 'SKMj4aTpc9',
    password: 'djKHE1y1Pg',
    database: 'SKMj4aTpc9'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

// add rows in the table
function addRow(data) {
    let insertQuery = 'INSERT INTO ?? VALUES (?,?,?,?,?)';
    let query = mysql.format(insertQuery, ["witness", data.witness_id, data.name, data.email, data.place, data.profession]);
    connection.query(query, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response.insertId);
    });
}

function queryRow() {
    let selectQuery = 'SELECT * FROM ??';
    let query = mysql.format(selectQuery, ['witness']);
    // query = SELECT * FROM 'witness'
    connection.query(query, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        // rows fetch
        console.log(query);
    });
}

// timeout just to avoid firing query before connection happens

setTimeout(() => {
    // call the function
    queryRow();
}, 1000);



/*const server = http.createServer(function(request, response) { // mostrar a tabela - rota se calhar?
    if (request.url == "/") {
        var obj, dbParam, xmlhttp, myObj, x, txt = "";
        connect.con.query('SELECT * FROM witness', function(err,
            rows, fields) {
            if (!err) {
                console.log('Connected to MySQL Server!');
                numRows = rows.length;
                result = rows;
            }
            else
                console.log('Error while performing Query.', err);
        });
        txt += "<table class='table' style='width:50%' border='1'>";
        txt += "<tr><td>id</td><td>nome</td><td>email</td><td>place</td><td>profession</td></tr>";
        for (x = 0; x < numRows; x++) {
            txt += "<tr><td style='text-align:right'>" + result[x].witness_id + "</td><td>" + result[x].name + "</td><td>" + result[x].email + "</td><td>" + result[x].place + "</td><td>" + result[x].profession +
                "</td>";
        }
        response.write(txt);
        /*response.writeHead(200, { "Content-Type": "text/html" });
                response.write(
                        '<html><title>PROJ - Groups</title> < meta charset = "utf-8" > <meta name="viewport"
                        content = "width=device-width, initial-scale=1" > <link rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <script
src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script><script
src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> <body>'
);
response.write(txt);
response.write("</body></html>");
response.end();*/
  /*  }
});