import React from 'react';
import { AppBar,makeStyles, Toolbar, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme =>({

          AppBar:{

            backgroundColor:'black'
    },
    link: {
        

        textDecoration: 'none',
        color: 'white'
    },
    title: {
        
        cursor: 'ponter',
        color: 'white'
    }
}))

const AppNavigator = () => {


    const classes = useStyles();

    return (
        <AppBar className={classes.AppBar} position='fixed'>
            <Toolbar>
                <Link to='/' className={classes.link}>
                <Typography variant='h6'>Pokedex</Typography>
                </Link>
          </Toolbar>
        </AppBar>
    )
}

export default AppNavigator
