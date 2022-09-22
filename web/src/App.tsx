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

/*interface LinksProps {
  id: number
  url: string
  title: string
}*/

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
    console.log(response.data)
  }

  return (
    <>
      <Box
        sx={{ backgroundColor: '#e6e6e6', minHeight: '100vh', width: '100%' }}
      >
        {/* HEADER */}
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

        {/* CONTENT */}
        <Container maxWidth="md">
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <LinksList links={links} get={() => getLinks()} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
