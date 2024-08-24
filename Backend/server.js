// const express = require('express');
// const mysql = require("mysql")
// const cors = require("cors")
// const port = 8800

// const app = express();
// app.use(cors())

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database:"realestate"
// })

// // const port = process.env.PORT || port;

// // const www = process.env.WWW || './';
// // app.use(express.static(www));
// // console.log(`serving ${www}`);

// app.get('/', (req, res) => {
//     return res.json("From Backend Side");
// });

// app.get("/user", (req, res) => {
//     const sql = "SELECT * FROM user Inner JOIN post ON user.user_id=post.user_id JOIN images ON post.post_id = images.post_id";
//     db.query(sql, (err, data) => {
//         if (err) return res.json(err);
//         return res.json(data);
//     })
// })
// app.listen(port, () => console.log(`listening on http://localhost:${port}`));
