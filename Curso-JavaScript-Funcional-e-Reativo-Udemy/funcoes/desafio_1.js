function somar(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

const result = somar(3)(4)
console.log(result(5))

/******************************************** */

function calcular(x){
    return function(y){
        return function(fn){
            return fn(x, y)
        }
    }
}
function subtrair(a, b){
    return a - b

}
function mult(a, b){
    return a * b

}

const res1 = calcular(10)(5)(subtrair)
console.log(res1)