// const EntityBase = require('./entityBase')




// console.log(new EntityBase({
//     name: "Crystyan Santos",
//     gender:"male",
// }).name)

// console.log(new EntityBase({
//     name: "Fernanda Silva",
//     gender:"female",
// }).name)

const assert = require('assert') 
const Employee = require("./employee");
const Manager = require('./manager');
const Util = require('./util');



const GENDER = {
    male:'male',
    female:'female'
}

{
    const employee = new Employee({
        name: 'Xavier',
        gender:GENDER.male
    })

    assert.throws(()=> employee.birthYear, {message: 'you must define age first!'})
}

const CURRENT_YEAR = 2021
Date.prototype.getFullYear = () => CURRENT_YEAR

{
    const employee = new Employee({
        name: 'Wolverine',
        age:20,
        gender:GENDER.male
    })

    assert.deepStrictEqual(employee.name, "Mr. Wolverine")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32))

    const expectedBirthYear = 2001
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

    employee.birthYear = new Date().getFullYear() - 80 

    //nao tem set, não muda
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear )

    employee.age = 80 
    assert.deepStrictEqual(employee.birthYear, 1941)

    console.log('\n ----employee---')
        console.log('employee.name:',employee.name)
        console.log('employee.age:',employee.age)
        console.log('employee.gender:',employee.gender)
        console.log('employee.grossPay:',employee.grossPay)
        console.log('employee.netPay:',employee.netPay)

}

{
    const manager = new Manager({
        name: 'Vampira',
        age:18,
        gender:GENDER.female
    })

    assert.deepStrictEqual(manager.name, "Ms. Vampira")
    assert.deepStrictEqual(manager.age, undefined)
    assert.deepStrictEqual(manager.gender, undefined)
    assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000))
    assert.deepStrictEqual(manager.netPay, 0)

    console.log('\n ----employee---')
        console.log('manager.name:',manager.name)
        console.log('manager.age:',manager.age)
        console.log('manager.gender:',manager.gender)
        console.log('manager.grossPay:',manager.grossPay)
        console.log('manager.bonuses:',manager.bonuses)
        console.log('manager.netPay:',manager.netPay)
}