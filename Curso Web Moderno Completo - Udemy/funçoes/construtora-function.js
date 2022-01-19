function Carro(velocidade_max = 200, delta = 5){
    let velocidade_atual = 0

    this.acelerar = function(){
        if(velocidade_atual+delta <= velocidade_max){
            velocidade_atual += delta

        } else {
            velocidade_atual = velocidade_max

        }
    }
    this.get_velociade_atual = function(){
        return velocidade_atual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.get_velociade_atual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
console.log(ferrari.get_velociade_atual())