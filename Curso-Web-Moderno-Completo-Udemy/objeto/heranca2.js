//  cadeia de prototipos
Object.prototype.attr0 = '0'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {
    vel_atual: 0,
    vel_max: 200,
    acelera_mais(delta){
        if(this.vel_atual + delta <= this.vel_max){
            this.vel_atual += delta

        } else {
            this.vel_atual = this.vel_max

        }
    },
    status(){
        return `${this.vel_atual}km/h de ${this.vel_max}km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    vel_max: 324
}
const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)


console.log(ferrari)
console.log(volvo)

volvo.acelera_mais(100)
console.log(volvo.status())

ferrari.acelera_mais(300)
console.log(ferrari.status())