import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { Tooltip } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'
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

export const ModalDelete = ({ get, id }: any) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  //Função responsável por fazer a exclusão do link
  async function deleteLink(deleteId: any) {
    await axios.delete(`${import.meta.env.VITE_API_URL}/links/${deleteId}`)
    get()
    handleClose()
  }

  return (
    <div>
      <Tooltip title="Excluir" arrow>
        <Button onClick={handleOpen}>
          <DeleteIcon />
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
            Tem certeza que deseja excluir?
          </Typography>

          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button
              variant="contained"
              onClick={() => {
                deleteLink(id)
              }}
              size="medium"
            >
              Sim
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleClose}
              size="medium"
            >
              Não
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
