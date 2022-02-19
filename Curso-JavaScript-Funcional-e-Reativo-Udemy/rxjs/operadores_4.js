const {from, Observable} = require('rxjs')

function primeiro(){
    return function(obsFonte){
        return Observable.create(subscribe => {
            obsFonte.subscribe({
                next(v){
                    subscribe.next(v)
                    subscribe.complete()

                }
            })
        })
    }
}

function nenhum(){
    return function(obsFonte){
        return Observable.create(subscribe => {
            obsFonte.subscribe({
                next(v){
                    subscribe.complete()

                }
            })
        })
    }
}

function ultimo(){
    return function (obsFonte){
        return Observable.create(subscribe => {
            let ultimo
            obsFonte.subscribe({
                next(v){
                    ultimo = v

                },
                complete(){
                    if(ultimo !== undefined){
                        subscribe.next(ultimo)

                    }
                    subscribe.complete()

                }
            })
        })
    }
}

from([1, 2, 3, 4, 5])
    .pipe(
        //primeiro(),
        //nenhum(),
        ultimo()
    )
    .subscribe(console.log)