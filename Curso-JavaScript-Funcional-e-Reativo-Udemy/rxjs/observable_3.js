const {Observable, noop} = require('rxjs')

function entre(min, max){
    return new Observable(subscriber => {
        for(let i = min; i <= max; i++){
            subscriber.next(i)

        }
        subscriber.complete()
    })
}

entre(4, 10)
    .subscribe(
        num => console.log(`num: ${num}`),
        noop,
        () => console.log('Fim')
    )