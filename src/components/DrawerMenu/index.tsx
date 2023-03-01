import { ChevronLeft } from "@mui/icons-material"
import { Divider, Drawer, List, ListItemButton, ListItemIcon, Icon, ListItemText, styled, IconButton, useTheme, useMediaQuery } from "@mui/material"
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
  const matches = useMediaQuery("(min-width:300px) and (max-width: 700px)");
  const matchesTablet = useMediaQuery("(min-width: 750px) and (max-width: 1150px)")

  const navigate = useNavigate()
  const theme = useTheme()

  const [open, setOpen] = useState(matches || matchesTablet ? false : true)

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
        sx={{ ...(open && { display: 'none'}), position: 'relative', top: matches ? top : tabletTop, left: matches ? left : tabletLeft}}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open} variant={"persistent"}>
        { matches || matchesTablet ? (
          <DrawHeader>
          <IconButton onClick={handleDrawerClose} >
            <ChevronLeft color="success" />
          </IconButton>
        </DrawHeader>
        ) : '' }

        <Box sx={{ backgroundColor: '#141010' }} width='280px' height='100%' display='flex' flexDirection='column'>
          <Box width='100%' height='200px' display='flex' alignItems='center' justifyContent='center'>
            <h1 style={{ color: '#ddd', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >Bem vindo ao Emerald!</h1>
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

              <ListItemButton onClick={() => navigate('/')}>
                <ListItemIcon sx={{ color: '#01C38D' }}>
                  <Icon>home</Icon>
                </ListItemIcon >
                <ListItemText sx={{ color: '#01C38D' }} primary='Voltar para Home' />
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
