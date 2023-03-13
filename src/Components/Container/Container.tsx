import * as React from 'react'

import startImage from '../../assets/ilustracao-crianca-cadeira-de-rodas.png'
import { Box, Typography } from '@mui/material'
import { ContainerStyled, ContentStyled } from './Container.style'
interface IContainerProps {
  children: JSX.Element;
  backgroundColor?: string;
}

export function Container({ children, backgroundColor }: IContainerProps) {
  return (
    <ContainerStyled bgcolor={backgroundColor}>
      <ContentStyled>{children}</ContentStyled>
    </ContainerStyled>
  )
}
