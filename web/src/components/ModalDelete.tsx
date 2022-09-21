import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { TextField, Tooltip } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center'
}

export const ModalDelete = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Tooltip title="Excluir">
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
            <Button variant="contained" onClick={handleClose} size="medium">
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
