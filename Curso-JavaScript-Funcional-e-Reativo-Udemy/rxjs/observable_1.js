const {Observable, Subscriber} = require('rxjs')

const promise = new Promise(resolve => {
    resolve('promise é legal')

})
promise.then(console.log)


const obs = new Observable(subscriber => {
    subscriber.next('observable é legal 1')
    subscriber.next('observable é legal 2')
    setTimeout(() => {
        subscriber.next('observable é legal 3')

    }, 1000)

})
obs.subscribe(console.log)