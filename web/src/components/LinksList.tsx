import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Tooltip,
  Typography
} from '@mui/material'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'

import { ModalUpdate } from './ModalUpdate'
import { ModalDelete } from './ModalDelete'

interface LinksListProps {}

//Componente responsável por mapear o array de links e exibir os cards na tela
export const LinksList = ({ links, get }: any) => {
  return (
    <>
      {links.map((link: any) => {
        return (
          <Card
            key={link.id}
            sx={{
              maxWidth: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: '1.2rem' }}>{link.title}</Typography>
              <Typography
                variant="body2"
                className="url"
                sx={{ wordBreak: 'break-all' }}
              >
                {link.url}
                <span>
                  <Tooltip title="Copiar" arrow>
                    <Button
                      sx={{
                        height: '1rem',
                        minWidth: '0rem',
                        width: '0',
                        fontSize: '0.5rem',
                        ml: '0.2rem'
                      }}
                      onClick={() => navigator.clipboard.writeText(link.url)}
                      variant="text"
                    >
                      <ContentCopyIcon sx={{ height: '1rem' }} />
                    </Button>
                  </Tooltip>
                </span>
              </Typography>
            </CardContent>

            <Box>
              <CardActions>
                <ModalUpdate get={() => get()} link={link} />
                <ModalDelete get={() => get()} id={link.id} />
              </CardActions>
            </Box>
          </Card>
        )
      })}
    </>
  )
}
