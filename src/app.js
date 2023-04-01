const express = require('express')
const { userRouter } = require('./routes/users.router')


const app = express()
const PORT = 4000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/products',useRouter)
app.use('/api/carts',useRouter)


app.listen(PORT ,(err)=> {
    if(err)return console.log("Error al iniciar el sevidor")
    console.log("servidor iniciado en el purto${PORT}")
})