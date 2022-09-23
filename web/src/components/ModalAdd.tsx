import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { TextField, Tooltip } from '@mui/material'
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

export const ModalAdd = ({ get }: any) => {
  const [titleInputValue, setTitleInputValue] = useState('')
  const [urlInputValue, setUrlInputValue] = useState('')

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  //Função responsável por adicionar um novo link na API
  async function createLink() {
    const response = await axios.post('http://localhost:3333/links', {
      url: urlInputValue,
      title: titleInputValue
    })
    get()
    setTitleInputValue('')
    setUrlInputValue('')
    handleClose()
  }

  return (
    <div>
      <Tooltip title="Novo link" arrow>
        <Button variant="contained" onClick={handleOpen} size="medium">
          + LINK
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
            Inserir novo link
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
            onClick={() => {
              createLink()
            }}
            disabled={
              urlInputValue == '' || titleInputValue == '' ? true : false
            }
            size="medium"
          >
            Adicionar
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
