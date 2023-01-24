import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, Icon, ListItemText } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from 'react-router-dom'

export const DrawerMenu = () => {
  const navigate = useNavigate()

  return(
    <>
      <Drawer open={true} variant={"persistent"}>
        <Box sx={{ backgroundColor: '#141010' }} width='280px' height='100%' display='flex' flexDirection='column'>
          <Box width='100%' height='200px' display='flex' alignItems='center' justifyContent='center'>
            <Avatar sx={{ height: 100, width: 100}} src="https://lh3.googleusercontent.com/a/AEdFTp4MYtISvOobTkI5ltevJbvrCA131r81RAP6pxPyoPA=s288-p-rw-no" />
          </Box>

          <Divider sx={{ color: '#fff', backgroundColor: '#01C38D' }} />

          <Box flex={1}>
            <List component='nav'>
              <ListItemButton onClick={() => navigate('/dashboard')}>
                <ListItemIcon sx={{ color: '#01C38D' }}>
                   <Icon>equalizer</Icon>
                </ListItemIcon>
                <ListItemText sx={{ color: '#01C38D' }} primary='Dashboard' />
              </ListItemButton>

              <ListItemButton onClick={() => navigate('/dashboard/register')}>
                <ListItemIcon sx={{ color: '#01C38D' }}>
                  <Icon>addcard</Icon>
                </ListItemIcon >
                <ListItemText sx={{ color: '#01C38D' }} primary='Cadstrar despesas' />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
