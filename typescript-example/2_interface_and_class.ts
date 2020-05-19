/* ---------------------------------------------------------------------------------------
* about:接口、对象、类
* author:马兆铿（810768333@qq.com）
* date:2020-04-48
* ---------------------------------------------------------------------------------------- */

/* ----------------------------------------- 可索引 ----------------------------------------- */
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

console.log(myArray)


/* ----------------------------------------- 接口 ----------------------------------------- */

// 类的实施
interface ILoan {
  interest: number
}

interface ALoan extends ILoan {
  rebate: number
}

class AgriLoan implements ALoan {
  interest: number
  rebate: number

  constructor (interest, rebate) {
    this.interest = interest
    this.rebate = rebate
  }
}

var obj = new AgriLoan(10, 1)
console.log('利润为 : ' + obj.interest + '，抽成为 : ' + obj.rebate)


/* ----------------------------------------- 命名空间 ----------------------------------------- */
declare namespace CatNameSpace {
  interface CatInterface {
    name: string
    age: number
  }
}

export type CatInterface = CatNameSpace.CatInterface

class Cat implements CatInterface {
  name: string
  age: number

  constructor (name) {
    this.name = name
    this.age = 0
  }
}
