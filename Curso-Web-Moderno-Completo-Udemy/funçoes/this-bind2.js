function Pessoa(){
    this.idade = 0

    const selt = this
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa