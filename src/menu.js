import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from '@material-ui/core'

import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';


import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 8,
    },
    title: {
      flexGrow: 1,
    },
  }));


const Menu = ({ tema }) => {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu"
                    onClick={ tema }
                >
                    <PermDataSettingIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title} >
                REACT JS NEGÓCIOS VIRTUAIS
                    </Typography>
                <Button color="inherit" className={classes.menuButton}>Atualizações</Button>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Menu