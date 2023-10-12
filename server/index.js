const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const conn = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "bahl",
    database: "lab13",
});

conn.getConnection((err) => {
    if (err) console.log(err);
    else {
        console.log("MySQL connection Pool Created")
    }
});

const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log("The server is running at port: " + port);
});

app.get("/", (req, res) => {
    res.send(`<h1>Welcome</h1>`)
});

app.post("/postNote", (req, res) => {
    let {title, content} = req.body;

    Date.prototype.today = function () { 
        return  this.getFullYear() + "/" + (((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ ((this.getDate() < 10)?"0":"") + this.getDate() +(((this.getMonth()+1) < 10)?"0":"");
    }
    
    var newDate = new Date();
    let date = newDate.today()


    let query = `insert into note(title, content, date) values('${title}', '${content}', '${date}' )`;

    conn.query(query, (err) => {
        err ? res.send("error") : res.send("Added")
    })
});

app.post("/getNote", (req, res) => {
    
    let query = `select * from note;`;
    conn.query(query, (err, rows) => {
        if(rows.length === 0) {
            res.send("error")
        }
        else {
            err ? res.send("error") : res.send(rows)
        }
    })
});

app.post("/deleteNote", (req, res) => {
    let {id} = req.body;
    
    let query = `delete from note where id=${id}`;
    console.log(id)
    conn.query(query, (err, rows) => {
        err ? res.send("error") : res.send("Removed")
    })
});

app.post("/updateNote", (req, res) => {
    let {id, title, content} = req.body;
    
    let query = `update note set title=${title}, content=${content} where id=${id};`;
    conn.query(query, (err, rows) => {
        err ? res.send("error") : res.send("Updated")
    })
});