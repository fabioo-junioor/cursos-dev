//  notaçao literal
const obj1 = {}
console.log(obj1)

//  objeto em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//  funçoes contrutoras
function Produto(nome,preco,desc){
    this.nome = nome
    this.get_preco_com_desconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new Produto('caneta', 7, 0.15)
const p2 = new Produto('Notebook', 3000, 0.25)

console.log(p1.get_preco_com_desconto(), p2.get_preco_com_desconto())

//  funçao factory
function criar_funcionario(nome, salario_base, faltas){
    return{
        nome,
        salario_base,
        faltas,
        get_salario(){
            return (this.salario_base/30)*(30-faltas)
        }
    }
}

const f1 = criar_funcionario('joao', 7900, 0.15)
const f2 = criar_funcionario('maria', 11000, 1)

console.log(f1.get_salario(), f2.get_salario())


//  objetc.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

//  uma funçao famosa que retorna objeto
const from_json = JSON.parse('{"info": "sou json..."}')
console.log(from_json.info)