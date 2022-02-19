const {Observable} = require('rxjs')

const obs = Observable.create(subscriber => {
    subscriber.next('Rxjs')
    subscriber.next('Rxjs')
    subscriber.next('Rxjs')
    subscriber.next('Rxjs')
    if(Math.random() > 0.5){
        subscriber.complete()

    }else{
        subscriber.error('error')
    }
})

obs.subscribe({
    next(valor){
        console.log(`valor: ${valor}`)

    },
    complete(){
        console.log('Fim')
        
    },
    error(msg){
        console.log(`Erro: ${msg}`)

    }
})