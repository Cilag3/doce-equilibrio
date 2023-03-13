import * as React from 'react'
import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),

  minHeight: 'calc(100vh - 60px)',
  [theme.breakpoints.up('sm')]:{
    //width:
  },
  width:'100vh',
  maxWidth: '1200px',
  display: 'flex', 
  
}))
