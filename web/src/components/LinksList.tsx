import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Tooltip,
  Typography
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { ModalUpdate } from './ModalUpdate'

interface LinksListProps {}

export const LinksList = ({ links }: any) => {
  return (
    <>
      {links.map((link: any) => (
        <Card
          sx={{
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: '1.25rem' }}>{link.title}</Typography>
            <Typography>{link.url}</Typography>
          </CardContent>

          <Box>
            <CardActions>
              <ModalUpdate />
              <Tooltip title="Excluir">
                <Button>
                  <DeleteIcon />
                </Button>
              </Tooltip>
            </CardActions>
          </Box>
        </Card>
      ))}
      <Typography></Typography>
    </>
  )
}
