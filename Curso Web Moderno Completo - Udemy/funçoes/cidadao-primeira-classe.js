function fun1(){

}

const fun2 = function(){

}

const array = [function(a,b){
    return a+b
}, fun1, fun2]

const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

function run(fun){
    fun()
}
run(function(){console.log('Exec...')})

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(5)