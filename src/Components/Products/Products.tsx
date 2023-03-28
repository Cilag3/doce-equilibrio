import { Box, Typography, Button} from '@mui/material'
import * as React from 'react'
import img from '../../assets/ilustracao-crianca-cadeira-de-rodas.png'
import { Container } from '../Container/Container'
import { IProductCardProps, ProductCard } from '../ProductCard/ProductCard'
const productList: IProductCardProps[] = [
  {
    name: 'Name Cookie',
    price: 10,
    descripition: 'Cookies de 27 gr com gotas de chocolate',
    image: img
  },
  {
    name: 'Name Cookie 2',
    price: 10,
    descripition: 'Cookies de 27 gr com gotas de chocolate',
    image: img
  },
  {
    name: 'Name Cookie 3',
    price: 10,
    descripition: 'Cookies de 27 gr com gotas de chocolate',
    image: img
  }
]

export function Products() {
  return (
    <Container>
      <>
      <Box display='flex' justifyContent='center'  mb={8}>
      <Typography variant='h3'>
        Cardápio
      </Typography>
      </Box>
      <Box display='flex' gap={2} justifyContent='center'>
        {productList.map(value => (
          <ProductCard
            key={value.name}
            name={value.name}
            price={value.price}
            descripition={value.descripition}
            image={value.image}
          />
        ))}
      </Box>
      <Box display='flex'flexDirection='column' alignItems='center' gap={1} mt={4}>
      <Typography>EM BREVE</Typography>
      <Button disabled variant='contained'>Confira no iFood</Button>
      </Box>
      </>
    </Container>
  )
}
