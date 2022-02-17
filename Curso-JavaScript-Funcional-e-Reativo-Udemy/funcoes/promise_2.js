/*
setTimeout(function(){
    console.log('Exec callback 1...')
    
    setTimeout(function(){
        console.log('Exec callback 2...')

        setTimeout(function(){
            console.log('Exec callback 3...')
    
            
        }, 2000)
    }, 2000)
}, 2000)
*/

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Exec promise...')
            resolve()
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)