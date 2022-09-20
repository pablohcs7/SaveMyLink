const express = require('express')
const allLinks = [{ link: 'teste1.com', title: 'title test 2' }]
const saveMyLinksRoutes = express.Router()
const { PrismaClient } = require('@prisma/client')
const { response } = require('express')

const prisma = new PrismaClient()

//Create (rota responsável por criar um novo link)
saveMyLinksRoutes.post('/links', async (req, res) => {
  const { url } = req.body
  const { title } = req.body
  const link = await prisma.link.create({
    data: {
      url,
      title
    }
  })
  return res.status(201).json(link)
})

//Read (rota responsável por retornar os dados da API em JSON)
saveMyLinksRoutes.get('/links', async (req, res) => {
  const links = await prisma.link.findMany()
  return res.status(200).json(links)
})

//Update (rota responsável por atualizar os dados já salvos)
saveMyLinksRoutes.put('/links', async (req, res) => {
  const { url, title, id } = req.body

  //verifica se o ID está sendo passado na requisição pois é obrigatório
  if (!id) {
    return res.status(400).json('Id is mandatory')
  }

  //verifica se o id que foi passado existe no banco
  const linkAlreadyExist = await prisma.link.findUnique({ where: { id } })
  if (!linkAlreadyExist) {
    return res.status(404).json('Link not exist')
  }

  const links = await prisma.link.update({
    where: {
      id
    },
    data: {
      url,
      title
    }
  })

  return res.status(200).json(links)
})

//Delete (rota responsável por excluir dados salvos)
saveMyLinksRoutes.delete('/links/:id', async (req, res) => {
  const { id } = req.params

  //transforma o id de string para int
  const intId = parseInt(id)

  //verifica se o ID está sendo passado na requisição pois é obrigatório
  if (!intId) {
    return res.status(400).json('Id is mandatory')
  }

  //verifica se o id que foi passado existe no banco
  const linkAlreadyExist = await prisma.link.findUnique({
    where: { id: intId }
  })
  if (!linkAlreadyExist) {
    return res.status(404).json('Link not exist')
  }

  await prisma.link.delete({ where: { id: intId } })

  return res.status(200).send()
})

module.exports = saveMyLinksRoutes
