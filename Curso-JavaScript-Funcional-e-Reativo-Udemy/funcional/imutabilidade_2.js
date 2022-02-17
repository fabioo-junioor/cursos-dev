const nums = [4,8,3,2,6,,5,7]

// recursividade!
function somar(array, total = 0){
    if(array.length === 0){
        return total

    }
    return somar(array.slice(1), total + array[0])
}
const total = somar(nums)
console.log(total)


/*
// reduce!
const somar = (a, b) => a + b
const total = nums.reduce(somar)
console.log(total)
*/

/*
// dados mutaveis!
let total = 0
for(let i = 0; i < nums.length; i++){
    total += nums[i]

}
console.log(total)
*/