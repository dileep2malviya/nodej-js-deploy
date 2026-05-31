import express from "express"

const app = express()

const PORT = process.env.port ?? 8080

app.get('/',(req, res) => {
    return res.json({msg: "hello from the server"})
})


app.listen(PORT, ()=> {
    console.log('running application on 8080 port')
})