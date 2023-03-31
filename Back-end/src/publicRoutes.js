const express = require('express')
const FormularioController = require('./controllers/FormularioController')
const UsuarioController = require('./controllers/UsuarioController')
const routes = express.Router()
routes.get('/', (req, res) => {
  return res.json({ message: "Server is up" })
})
//rotas formularios
routes.post('/form', FormularioController.create)
routes.get('/formAll', FormularioController.index)
routes.put('/formUp/:id', FormularioController.update)
routes.delete('/formDell/:id', FormularioController.delete)
//rotas usuarios
routes.post('/user', UsuarioController.create)
routes.get('/userAll', UsuarioController.index)
routes.put('/userUp/:id', UsuarioController.update)
routes.delete('/userDell/:id', UsuarioController.delete)

module.exports = routes
