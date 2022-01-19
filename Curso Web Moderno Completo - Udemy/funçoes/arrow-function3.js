let compara_com_this = function(parametro){
    console.log(this === parametro)
}

compara_com_this(global)


const obj = {}
compara_com_this = compara_com_this.bind(obj)
compara_com_this(global)
compara_com_this(obj)

let compara_com_this_arrow = parametro => console.log(this === parametro)
compara_com_this_arrow(global)
compara_com_this_arrow(this)

compara_com_this_arrow = compara_com_this_arrow.bind(obj)
compara_com_this_arrow(obj)
compara_com_this_arrow(module.exports)