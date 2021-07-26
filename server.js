const express = require('express')
const cors = require('cors')

const pageRouter = require('./rotas/pageRouters')
const apiRouter = require('./rotas/apiRouter')

const app = express();

app.use(cors({
    origin: '*'
}))

app.use(express.json())
app.set('vier engine', 'ejs')
app.use('/...', pageRouter)
app.use('/api/', apiRouter)

app.listen(3000, () => console.log('Servidor Rodando'));