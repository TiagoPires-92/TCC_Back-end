const connection = require('../database/connection.js')
module.exports = {
  async index(req, res) {
    const userAll = await connection('usuario')
    return res.json(userAll)
  },
  async create(req, res) {
    const { nome, sobrenome, email } = req.body

    const user = await connection('usuario').insert({ nome, sobrenome, email })

    return res.status(200).json({ user: user })
  },
  async update(req, res) {
    const { id } = req.params
    const { nome, sobrenome, email } = req.body
    const user = await connection('usuario').count('*', { as: 'quant' }).where('id', id)
    const verificauser = user[0].quant
    // const today = new Date();
    // const data = today.toLocaleDateString();
    if (verificauser > 0) {
      await connection('usuario').where('id', id).update({ nome: nome, sobrenome: sobrenome, email: email, })

      return res.status(200).json({ user: user })
    }
    return res.status(401).json({ msg: 'id não encontrado' })
  },
  async delete(req, res) {
    const { id } = req.params
    const user = await connection('usuario').count('*', { as: 'quant' }).where('id', id)
    const verificauser = user[0].quant
    if (verificauser > 0) {
      await connection('usuario').where('id', id).delete()

      return res.status(200).json({ user: user })
    }
    return res.status(401).json({ msg: 'id não encontrado' })
  }
}
