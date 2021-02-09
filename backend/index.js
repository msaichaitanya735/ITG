const { response } = require('express')
const express = require('express')
const app = express()
const port = 5000
const cors =  require("cors");
const pool = require("./db")


app.use(cors())
app.use(express.json())

app.post("/add",async(req,res)=>{
    try {
        const {name}= req.body
        const newA = await pool.query("INSERT INTO itg_registrations (name) VALUES($1) RETURNING *",[name])
        res.json(newA.rows)
    } catch (err) {
        console.log(err.message)
    }
})

// app.get("/add",async(req,res)=>{
//     try {
//         const x= await pool.query("SELECT * FROM itg_registrations;")
//         res.json(x.rows)
//     } catch (err) {
//         console.log(err.message)
//     }
// })

app.get("/add", async(req,res)=>{
    try {
        const allUsers = await pool.query("SELECT * FROM itg_registrations")
       res.json(allUsers.rows) 
    } catch (err) {
        console.error(err.message)
    }
})

app.get("/add/:mob",async(req,res)=>{
    try {
        const {mob}=req.params
        console.log(mob)
        const Muser = await pool.query("SELECT * FROM itg_registrations WHERE mob_no=$1",[mob])

        res.json(Muser.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})


// const data = require('./db.js')

// app.use(express.json())
// app.use(function(req,res,next){
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access_Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//     next();
// });

// app.get('/',(req,res)=>{
//     data.getData()
//     .then(response=>{
//         res.status(200).send(response);
//     })
//     .catch(error=>{
//         res.status(500).send(error);
//     })
// })

// app.post('/xyz',(req,res)=>{
//     data.createUser(req.body)
//     .then(response=>{
//         res.status(200).send(response);
//     })
//     .catch(error=>{
//         res.status(500).send(error);
//     })
// })

// app.delete('/xyz/:id',(req,res)=>{
//     data.delUser(req.params.id)
//     .then(response=>{
//         res.status(200).send(response);
//     })
//     .catch(error=>{
//         res.status(500).send(error);
//     })
// })

// app.listen(port,()=>{
//     console.log(`App is running on port ${port}.`)
// })

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})