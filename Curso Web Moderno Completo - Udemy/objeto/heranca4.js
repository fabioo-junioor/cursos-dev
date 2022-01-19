function Meu_obj() {}
console.log(Meu_obj.prototype)

const obj1 = new Meu_obj
const obj2 = new Meu_obj
console.log(obj1.__proto__ === obj2.__proto__)
console.log(Meu_obj.prototype === obj1.__proto__)

Meu_obj.prototype.nome = 'anonimo'
Meu_obj.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = Meu_obj.prototype
obj3.nome = 'obj3'
obj3.falar()

console.log((new Meu_obj).__proto__ === Meu_obj.prototype)
console.log(Meu_obj.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)