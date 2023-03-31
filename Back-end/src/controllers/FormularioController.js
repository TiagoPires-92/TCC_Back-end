const connection = require('../database/connection.js')
module.exports = {
  async index(req, res) {
    const formAll = await connection('avaliacao_preferencias')
    return res.json(formAll)
  },
  async create(req, res) {
    const { genero, estado_civil, idade, sexo, idade_filhos, filha_feminino, filho_masculino, semana_acompanhado,
      findi_acompanhado, acesso_foracasa, acesso_trabalho, horario_oito_dezoito, horario_compartilhado,
      acesso_noite, acesso_madrugada, tempo_transito, acampanhado, sozinho_conteudo, sozinho_irrelevante,
      acompanhado_findi_gosta, acampanhado_findiirrelevante, tempo_acompanhado, tempo_sozinho, avaliacao,
      novidade_conteudo, novidade_irrelevante, controle_acesso, pagamento, atores_diretores, concorrentes, id_usuario } = req.body

    const form = await connection('avaliacao_preferencias').insert({
      genero, estado_civil, idade, sexo, idade_filhos, filha_feminino, filho_masculino, semana_acompanhado,
      findi_acompanhado, acesso_foracasa, acesso_trabalho, horario_oito_dezoito, horario_compartilhado,
      acesso_noite, acesso_madrugada, tempo_transito, acampanhado, sozinho_conteudo, sozinho_irrelevante,
      acompanhado_findi_gosta, acampanhado_findiirrelevante, tempo_acompanhado, tempo_sozinho, avaliacao,
      novidade_conteudo, novidade_irrelevante, controle_acesso, pagamento, atores_diretores, concorrentes, id_usuario
    })

    return res.status(200).json({ form: form })
  },

  async delete(req, res) {
    const { id } = req.params
    const form = await connection('avaliacao_preferencias').count('*', { as: 'quant' }).where('id', id)
    const verificaform = form[0].quant
    if (verificaform > 0) {
      await connection('avaliacao_preferencias').where('id', id).delete()
      return res.status(204).send()
    }
    return res.status(401).json({ msg: 'id não encontrado' })

  },

  async update(req, res) {
    const { id } = req.params
    const { genero, estado_civil, idade, sexo, idade_filhos, filha_feminino, filho_masculino, semana_acompanhado,
      findi_acompanhado, acesso_foracasa, acesso_trabalho, horario_oito_dezoito, horario_compartilhado,
      acesso_noite, acesso_madrugada, tempo_transito, acampanhado, sozinho_conteudo, sozinho_irrelevante,
      acompanhado_findi_gosta, acampanhado_findiirrelevante, tempo_acompanhado, tempo_sozinho, avaliacao,
      novidade_conteudo, novidade_irrelevante, controle_acesso, pagamento, atores_diretores, concorrentes } = req.body

    const form = await connection('avaliacao_preferencias').count('*', { as: 'quant' }).where('id', id)
    const verificaform = form[0].quant
    if (verificaform > 0) {
      await connection('avaliacao_preferencias').where('id', id).update({
        genero: genero, estado_civil: estado_civil,
        idade: idade, sexo: sexo, idade_filhos: idade_filhos, filha_feminino: filha_feminino, filho_masculino: filho_masculino,
        semana_acompanhado: semana_acompanhado, findi_acompanhado: findi_acompanhado, acesso_foracasa: acesso_foracasa,
        acesso_trabalho: acesso_trabalho,
        horario_oito_dezoito: horario_oito_dezoito, horario_compartilhado: horario_compartilhado,
        acesso_noite: acesso_noite, acesso_madrugada: acesso_madrugada, tempo_transito: tempo_transito,
        acampanhado: acampanhado, sozinho_conteudo: sozinho_conteudo, sozinho_irrelevante: sozinho_irrelevante,
        acompanhado_findi_gosta: acompanhado_findi_gosta, acampanhado_findiirrelevante: acampanhado_findiirrelevante,
        tempo_acompanhado: tempo_acompanhado, tempo_sozinho: tempo_sozinho, avaliacao: avaliacao,
        novidade_conteudo: novidade_conteudo, novidade_irrelevante: novidade_irrelevante, controle_acesso: controle_acesso,
        pagamento: pagamento, atores_diretores: atores_diretores, concorrentes: concorrentes
      })
      return res.status(204).send()
    }
    return res.status(401).json({ msg: 'id não encontrado' })

  }

}
