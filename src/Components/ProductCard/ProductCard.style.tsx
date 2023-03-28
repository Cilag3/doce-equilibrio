import * as React from 'react'
import { styled } from '@mui/system'
import { Box, BoxProps } from '@mui/material'

export const ContainerStyled = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(1),
  minHeight: 'calc(100vh - 60px)',
  minWidth: '100%',
  maxWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const ContentStyled = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    smaxWidth: '1200px'
  }
}))
