/*----------------------------------------------------------------------------------
* about:教程的开始
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-01-10
* ----------------------------------------------------------------------------------*/
interface Person {
  firstName: string,
  lastName: string
}


function greeter (person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`
}

let user = {
  firstName: 'Ken',
  lastName: 'Ma'
}

console.log(greeter(user))
