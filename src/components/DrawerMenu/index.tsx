import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, Icon, ListItemText, styled, IconButton, useTheme, AppBar, Toolbar, Typography, CssBaseline, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'

const DrawHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ... theme.mixins.toolbar,
  justifyContent: 'flex-end',
  backgroundColor: '#141010',
  accentColor: '#fff'
}))

interface IDrawerMenuProps {
  top?: string
  left?: string
  tabletLeft?: string
  tabletTop?: string
}

export const DrawerMenu = React.memo(( {top, left, tabletLeft, tabletTop}: IDrawerMenuProps ) => {
  const matches = useMediaQuery("(min-width:600px)");
  const matchesTablet = useMediaQuery("min-width:750px")

  const navigate = useNavigate()
  const theme = useTheme()

  const [open, setOpen] = useState(matchesTablet ? true : false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return(
    <>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        onClick={handleDrawerOpen}
        edge='start'
        sx={{ ...(open && { display: 'none'}), position: 'relative', top: matches ? tabletTop : top, left: matches ? tabletLeft : left}}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open} variant={"persistent"}>
        <DrawHeader>
          <IconButton onClick={handleDrawerClose} >
            { matchesTablet ? '' : <ChevronLeft color="success" /> }
          </IconButton>
        </DrawHeader>

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
})
