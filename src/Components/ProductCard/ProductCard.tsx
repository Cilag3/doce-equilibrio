import * as React from 'react'

import startImage from '../../assets/ilustracao-crianca-cadeira-de-rodas.png'
import { Box, Typography, Button, CardActionArea, CardActions, Card, CardMedia,CardContent } from '@mui/material'
import { ContainerStyled, ContentStyled } from './ProductCard.style'

export interface IProductCardProps {
  name: string;
  price: number;
  descripition: string;
  image: string;
}

export function ProductCard({ name, price, descripition, image }: IProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography> 
          <Typography>R$ {price}</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
           {descripition}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  )
}
