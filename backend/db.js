const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'itg',//ITG
    password: '200999',
    port: 5432,
});

// const getData=()=>{
//     return new Promise(function(resolve,reject){
//         pool.query('SELECT * FROM ITG_REGISTRATIONS',(error,results)=>{
//             if(error){
//                 reject(error)
//             }
//             resolve(results);
//             console.log('Hello');
//         })
//     })
// }
// const createUser=(body)=>{
//     return new Promise(function(resolve,reject){
//         const {name,email}=body
//         pool.query('INSERT INTO ITG_REGISTRATIONS(name, email) VALUES($1,$2) RETURNING*',[name,email],(error,results)=>{
//             if(error){
//                 reject(error)
//             }
//             resolve(`A new user has been enrolled:${results.rows[0]}`)
//         })
//     })
// }
// const delUser=()=>{
//     return new Promise(function(resolve,reject){
//         const id= parseInt(request.params.id)
//         pool.query('DELETE FROM ITG_REGISTRATIONS WHERE id=$1',[id],(error,results)=>{
//             if(error){
//                 reject(error)
//             }
//             resolve(`User deleted with ID:${id}`)
//         })
//     })
// }

// module.exports={
//     getData,
//     createUser,
//     delUser,
// }
module.exports= pool;