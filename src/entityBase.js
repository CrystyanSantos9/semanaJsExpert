class EntityBase{
    //funcionam junto com métodos acessores
    //mascaras de acesso
    #name
    #gender
    #age

    constructor({name, gender, age}){
        this.#name = name
        this.#gender = gender
        this.#age = age
    }

    get name() {
        const prefix = this.#gender ==="male"?"Mr.":"Ms."
        return `${prefix} ${this.#name}`
    }

    get birthYear() {
        if(!this.#age){
            throw new Error('you must define age first!')
        }

        //senao 
        return new Date().getFullYear() - this.#age
    }

    set age(value){
        this.#age = value
    }
}

module.exports = EntityBase