const express = require('express')
//const { userRouter } = require('./routes/users.router')
const productsRouter = require('./routes/products')
const cartsRouter = require('./routes/carts')

const app = express()
const PORT = 4000

//app.use(express.json())
//app.use(express.urlencoded({extended:true}))

app.use('/api/products',productsRouter)
app.use('/api/carts',cartsRouter)


app.listen(PORT ,(err)=> {
  if(err)return console.log("Error al iniciar el sevidor")
    console.log("servidor iniciado en el purto${PORT}")
})

