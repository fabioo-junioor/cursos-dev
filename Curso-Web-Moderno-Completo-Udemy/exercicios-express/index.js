const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Fabio Junior'))

app.use('/fj', (req, res, next) => {
    console.log('Antes')
    next()
})

app.get('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    /*
    let corpo = ''
    req.on('data', function(parte){
        corpo += parte

    })
    req.on('end', function(){
        res.send(corpo)
    })
    */
   res.send(req.body)
})

app.get('/cliente/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/fj', (req, res, next) =>{
    console.log('Durante')
    res.json({
        data: [
            {id: 7, name: 'ana', position: 1},
              {id: 65, name: "carlos", position: 2}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    next()
    
    /*
    res.json([
        {id: 7, name: 'ana', position: 1},
        {id: 65, name: "carlos", position: 2}
    ])
    */
    
    /*
    res.json({
        nome: 'ipad 32gb',
        preco: 5000
    })
    */
    
    //res.send('<h2>Estou top</h2>')

})

app.listen(3000, () => {
    console.log('Backend executanto ')
})