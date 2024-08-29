const {Pool} = require('pg'); //Instance koneksi yang dibutuhkan //yoink si Pool
let pool = new Pool({ // Instantiate Pool dengan data
    user : 'postgres',
    password : 'postgres',
    host : 'localhost',
    port : 5432,
    database : 'demoSQL',
    idleTimeoutMillis : 500 //Untuk menutup koneksi Pool berdasarkan mili detik, defaultnya adalah 10 detik
}); //Object instance

// pool.query(`SELECT * FROM "Songs";`, (err, data)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// }); // async

module.exports = pool;