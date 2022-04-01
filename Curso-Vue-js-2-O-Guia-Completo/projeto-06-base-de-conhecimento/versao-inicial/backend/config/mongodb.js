const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', {useNewUrlParser: false})
    .catch(e => {
        const msn = 'Não foi possivel conectar com MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
        
    })
