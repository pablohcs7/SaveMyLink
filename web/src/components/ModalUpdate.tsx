import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { TextField, Tooltip } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center'
}

export const ModalUpdate = ({ link, get }: any) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [titleInputValue, setTitleInputValue] = useState('')
  const [urlInputValue, setUrlInputValue] = useState('')

  //Função verifica os valores passados para o update e envia a requisição para a API
  async function updateLink(urlEdited: any, titleEdited: any) {
    if (urlEdited == '') {
      urlEdited = link.url
    }
    if (titleEdited == '') {
      titleEdited = link.title
    }
    const response = await axios
      .put('http://localhost:3333/links', {
        id: link.id,
        url: urlEdited,
        title: titleEdited
      })
      .then(() => {
        get()
        setTitleInputValue('')
        setUrlInputValue('')
        handleClose()
      })
  }

  return (
    <div>
      <Tooltip title="Editar" arrow>
        <Button onClick={handleOpen}>
          <EditIcon />
        </Button>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: '1rem' }}
          >
            Editar link
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <TextField
              id="outlined-basic"
              size="small"
              label="Título"
              variant="outlined"
              helperText="Insira o título"
              onChange={(event) => {
                setTitleInputValue(event.target.value)
              }}
            />

            <TextField
              id="outlined-basic"
              size="small"
              label="URL"
              variant="outlined"
              helperText="Insira a URL"
              onChange={(event) => {
                setUrlInputValue(event.target.value)
              }}
            />
          </Box>
          <Button
            variant="contained"
            disabled={
              urlInputValue == '' && titleInputValue == '' ? true : false
            }
            onClick={() => updateLink(urlInputValue, titleInputValue)}
            size="medium"
          >
            Editar
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
