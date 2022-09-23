import {
  AppBar,
  Box,
  Container,
  Divider,
  Toolbar,
  Typography
} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { LinksList } from './components/LinksList'
import { ModalAdd } from './components/ModalAdd'

export const App = () => {
  const [links, setLinks] = useState([])

  //Carrega a API ao renderizar a página
  useEffect(() => {
    getLinks()
  }, [])

  //GET da API que retorna um array de links salvos
  async function getLinks() {
    const endpoint = 'http://localhost:3333/links'

    const response = await axios.get(endpoint)
    setLinks(response.data)
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#e6e6e6',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* HEADER */}
        <Box>
          <Box sx={{ flexGrow: 1, mb: '2.5rem' }}>
            <AppBar position="static" sx={{ backgroundColor: 'darkorange' }}>
              <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                  SaveMyLink
                </Typography>
                <Typography>
                  <AccountCircleIcon />
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </Box>

        {/* CONTENT */}
        <Container maxWidth="md" sx={{ flex: '1 0 auto', mb: '2rem' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              Width: '100%'
            }}
          >
            <Typography variant="h3" sx={{ mb: '1rem', textAlign: 'center' }}>
              Bem vindo ao SaveMyLink!
            </Typography>
            <Typography sx={{ mb: '2rem' }}>
              Salve seus links de forma prática e segura!
            </Typography>
            <Divider sx={{ width: '100%', mb: '2rem' }} />
          </Box>

          <Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: '1.5rem'
              }}
            >
              <Typography variant="h4">Meus Links</Typography>
              <ModalAdd get={() => getLinks()} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column-reverse',
                gap: '1rem'
              }}
            >
              <LinksList links={links} get={() => getLinks()} />
            </Box>
          </Box>
        </Container>
        {/*FOOTER */}
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            justifyContent: 'center',
            height: '3rem',
            backgroundColor: 'darkorange',
            alignItems: 'center',
            boxShadow: '0px -1px 6px 0px rgba(0,0,0,0.4)'
          }}
        >
          <Typography variant="body2">
            Feito com ♥ por{' '}
            <a target="_blank" href="https://github.com/pablohcs7">
              Pablo
            </a>
          </Typography>
        </Box>
      </Box>
    </>
  )
}
