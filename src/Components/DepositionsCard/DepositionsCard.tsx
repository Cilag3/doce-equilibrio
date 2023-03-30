import * as React from 'react'
import { Typography, Button,CardActions, Card,CardContent } from '@mui/material'
//import { ContainerStyled, ContentStyled } from './DepositionsCard.style'

export interface IDepositionsCardProps {
  name: string;
  descripition: string;
  
}

export function DepositionsCard({ name, descripition}: IDepositionsCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         {name}
        </Typography>
        <Typography variant="body2">
         {descripition}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
