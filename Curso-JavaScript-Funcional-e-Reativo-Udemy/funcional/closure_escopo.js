const x = 3
function fora(){
    const x = 97
    function somar(){
        return x + 3
    
    }
    return somar
}
module.exports = fora()