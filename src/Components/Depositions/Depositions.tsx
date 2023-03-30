import { Box, Typography, Button } from '@mui/material'
import * as React from 'react'
import { Container } from '../Container/Container'
import {
  IDepositionsCardProps,
  DepositionsCard
} from '../../Components/DepositionsCard/DepositionsCard'
const depositionsList: IDepositionsCardProps[] = [
  {
    name: 'Name Cookie',
    descripition: 'Cookies de 27 gr com gotas de chocolate'
  },
  {
    name: 'Name Cookie 2',
    descripition: 'Cookies de 27 gr com gotas de chocolate'
  },
  {
    name: 'Name Cookie 3',
    descripition: 'Cookies de 27 gr com gotas de chocolate'
  }
]

export function Depositions() {
  return (
    <Container backgroundColor="#FDFFD9">
      <>
        <Box display="flex" justifyContent="center" mb={8}>
          <Typography variant="h3">Depoimentos</Typography>
        </Box>
        <Box display="flex" gap={2} justifyContent="center">
          {depositionsList.map(value => (
            <DepositionsCard
              key={value.name}
              name={value.name}
              descripition={value.descripition}
            />
          ))}
        </Box>
      </>
    </Container>
  )
}
