function ordenar(array){
    return [...array].sort()
    
}

const nums = Object.freeze([3, 1, 7, 9, 4, 6]) // nao deixa alterar o array
const numsOrdenados = ordenar(nums)

console.log(numsOrdenados)
console.log(nums)

console.log(nums.slice(3)) // retira os 3 primeiros elementos