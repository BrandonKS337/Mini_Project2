const express = require('express')
// const mysql = require('mysql')
// const cors = require('cors')

const app = express() //creates the app
// app.use(cors())


//need api to get data from mysql database
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Penguin5!@#$!@#$!@#$',
//     database: 'Fantasy Nexus'
// })

//create api to just push message to console
// app.get('/', (req, res) => {
//     return res.json("From backend side")
// })

//write api to get data from mysql database
// app.get('/users', (req, res) => {
//     const sql = "SELECT * FROM users";
//     db.query(sql, (err, data) => {
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })
app.get('/api', (req, res) => { 
    return res.json({"users": ["userOne", "userTwo", "userThree"]})
})



//"starts up backend"
app.listen(8080, () => {
    console.log('Server started on port 8080') //this is just printing a message to say that the server has started
})