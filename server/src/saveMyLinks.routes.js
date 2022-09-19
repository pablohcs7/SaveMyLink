const express = require('express')
const allLinks = [{ link: 'teste1.com', title: 'title test 1' }]
const saveMyLinksRoutes = express.Router()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

//Create
saveMyLinksRoutes.post('/links', async (req, res) => {
  const { url } = req.body
  const { title } = req.body
  const link = await prisma.link.create({
    data: {
      url,
      title
    }
  })
  //allLinks.push({ link, title })
  return res.status(201).json(link)
})

//Read
saveMyLinksRoutes.get('/links', (req, res) => {
  return res.status(200).json(allLinks)
})

module.exports = saveMyLinksRoutes
