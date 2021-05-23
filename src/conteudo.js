import { Button,
         TextField,
         Container,
         Paper,
         Typography
} from '@material-ui/core'
import React from 'react'
import logo  from './assets/imagem.png'


const Conteudo = () => {

  return (
        <div >
            <Paper align="center"><h2>BEM VINDO</h2>
                <Typography>
                    <h3>Entre com os seus dados</h3>
                 </Typography>
            </Paper>
                <Container align="center"> 
                 <div className="logo">
                     <img src={ logo } 
                    width="100" height='100'/>
                </div>
            <div>
        <div>
            <span>    <h3>Usuário:</h3>  </span>  
                <TextField id="outlined-basic"  placeholder ="Digite o usuário" variant="outlined" />
            <span>  <h3>Senha:</h3>  </span>
             <TextField id="outlined-basic" placeholder="Digite a senha" variant="outlined" type="password"/>
        </div>
        <div>
            <br/>
                <Button variant="contained" 
                    color="primary"
                    onClick={ () => { alert("Bem vindo ao React JS Negócios Virtuais!") }} >
                         Enviar
                </Button>
            </div>
                    </div>
                </Container>
        </div>
    )
}

export default Conteudo