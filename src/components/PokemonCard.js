import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core'

import React from 'react'



const useStyles = makeStyles(theme =>({

  Card: {
    
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white',
    "&:hover": {
      
       backgroundColor:'rgba(90,90,90)'
    }
  },
  CardMedia: {
     
    margin: 'auto',
    width: 130,
    height:130
  },
  CardContent: {
    
     textAlign:'center'
  }
}))

function PokemonCard({pokemon,image}) {

  const { id, name } = pokemon;

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={2}>
      <Card className={classes.Card}>
        <CardMedia className={classes.CardMedia} image={image} />
        <CardContent className={classes.CardContent}>
          <Typography>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default PokemonCard
