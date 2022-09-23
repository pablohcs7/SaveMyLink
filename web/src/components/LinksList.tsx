import { Box, Card, CardActions, CardContent, Typography } from '@mui/material'

import { ModalUpdate } from './ModalUpdate'
import { ModalDelete } from './ModalDelete'

interface LinksListProps {}

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
              <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
                {link.url}
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
