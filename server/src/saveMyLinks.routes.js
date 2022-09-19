const express = require('express')

const allLinks = [{ link: 'teste1.com', title: 'title test 1' }]
const saveMyLinksRoutes = express.Router()

//Create
saveMyLinksRoutes.post('/links', (req, res) => {
  const { link } = req.body
  const { title } = req.body
  allLinks.push({ link, title })
  return res.status(201).json(allLinks)
})

//Read
saveMyLinksRoutes.get('/links', (req, res) => {
  return res.status(200).json(allLinks)
})

module.exports = saveMyLinksRoutes
