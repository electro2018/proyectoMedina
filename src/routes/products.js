const { Router } = require('express')

const userRouter = Router()


let users = []

// GET http://localhost:xxxx /api/products  /     (listar productos de base)
userRouter.get('/', (req, res)=>{
    
    res.send('get de usuarios')
})

// GET:/pid  http://localhost:xxxx /api/products  //(traer producto con id)

app.get('/:userId', (req, res)=>{  
  const { userId } = req.params

  const usuario = arrayUsuarios.find((usuario) => usuario.id === userId)

  if (!usuario) return res.status(400).send('no se encontro el usuario') 

  res.status(200).send(usuario)
})


// POST http://localhost:xxxx /api/products  /  (post,nuevo producto)
userRouter.post('/', (req, res)=>{
    const {title,description,code,price,status,stock,category ,thumbnails } = req.body
    users.push({ id:Date.now(), title, description,code, price ,status ,stock ,category ,thumbnails })
    return res.json({
        status: 'success',
        message: 'usuario agregado correctamente',
        users
    })
})

// PUT http://localhost:xxxx /api/products / PUT/:pid (tomar producto desde body)





// DELETE /:pid http://localhost:xxxx /api/products  /
     app.delete('/api/products/:pid', async (req, res) => {
    
  const { pid } = req.params

  // validar el id
  if (!pid) {
      return res.status(400).send('manda el id')
  }})

module.exports = { 
    userRouter
}