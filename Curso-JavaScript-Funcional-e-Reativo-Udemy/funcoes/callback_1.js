function exec(fn, a, b){
    return fn(a, b)

}

const somar = (x, y) => console.log(x + y)
const subtrair = (x, y) => console.log(x - y)
const subtrair2 = (w, z) => w -z


exec(somar, 56, 38)
exec(subtrair, 128, 38)
const res = exec(subtrair2, 52, 50)
console.log(res)


/************************************************* */
//const cb = () => console.log('exec...')
//setInterval(cb, 1000)


/************************************************* */
setInterval(function(){
    console.log('exec...')
}, 1000)