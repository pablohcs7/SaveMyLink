import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { TextField, Tooltip } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

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

export const ModalUpdate = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Tooltip title="Editar">
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
            />

            <TextField
              id="outlined-basic"
              size="small"
              label="URL"
              variant="outlined"
              helperText="Insira a URL"
            />
          </Box>
          <Button variant="contained" onClick={handleClose} size="medium">
            Editar
          </Button>
        </Box>
      </Modal>
    </div>
  )
}