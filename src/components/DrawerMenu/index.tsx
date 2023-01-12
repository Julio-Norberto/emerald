import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, Icon, ListItemText } from "@mui/material"
import { Box } from "@mui/system"

export const DrawerMenu = () => {
  return(
    <>
      <Drawer open={true}>
        <Box sx={{ backgroundColor: '#191E29' }} width='300px' height='100%' display='flex' flexDirection='column'>
          <Box width='100%' height='200px' display='flex' alignItems='center' justifyContent='center'>
            <Avatar sx={{ height: 100, width: 100}} src="" />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component='nav'>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#01C38D' }}>
                  <Icon>equalizer</Icon>
                </ListItemIcon>
                <ListItemText sx={{ color: '#01C38D' }} primary='Dashboard' />
              </ListItemButton>

              <ListItemButton>
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
