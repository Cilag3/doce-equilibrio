import * as React from 'react'

import startImage from '../../assets/ilustracao-crianca-cadeira-de-rodas.png'
import { Box, Typography, Button } from '@mui/material'
import { Container } from '../Container/Container'


export function Hero() {
  return (
    <Container backgroundColor="#FDFFD9">
      <Box display="flex">
        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          justifyContent="center"
          gap={2}
        >
          <Typography variant="h3" component="h1">
            Doce Equilíbrio
          </Typography>
          <Typography variant="subtitle1">
            Doce Equilíbrio é um negócio criado por um menino de 12 anos para
            arrecadar dinheiro e comprar uma cadeira de rodas elétrica. Ele
            vende cookies para alcançar seu objetivo e superar as limitações
            causadas pela sua condição de saúde.
          </Typography>
          <Button variant='contained' style={{width:'fit-content'}} >Saiba mais</Button>
        </Box>
        <Box flex={1}>
          <img src={startImage} alt="" style={{ width: '100%' }} />
        </Box>
      </Box>
    </Container>
  )
}