const ferrari = {
    modelo: 'f40',
    vel_max: 324
}

const volvo = {
    modelo: 'v40',
    vel_max: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


function meu_obj() {}
console.log(typeof Object, typeof meu_obj)
console.log(Object.prototype, meu_obj.prototype)