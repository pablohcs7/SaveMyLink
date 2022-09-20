import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const App = () => {
  const [links, setLinks] = useState([])

  //Carrega a API ao renderizar a página
  useEffect(() => {
    getLinks()
  }, [])

  //GET da API que retorna um array de links salvos
  const getLinks = async () => {
    const endpoint = 'http://localhost:3333/links'

    const response = await axios.get(endpoint)
    setLinks(response.data)
    console.log(links)
  }

  return (
    <>
      <Box sx={{ backgroundColor: '#e6e6e6', height: '100vh' }}>
        {/* HEADER */}
        <Box sx={{ flexGrow: 1, mb: '1rem' }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                SaveMyLink
              </Typography>
              <Typography>
                <AccountCircleIcon />
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        {/* CONTENT */}
        <Container maxWidth="sm">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography variant="h3" sx={{ mb: '1rem' }}>
              Bem vindo!
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  )
}
