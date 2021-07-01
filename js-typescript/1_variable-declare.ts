/* ---------------------------------------------------------------------------------------
* about:
* author:马兆铿（810768333@qq.com）
* date:2020-04-27
* ---------------------------------------------------------------------------------------- */

/* ----------------------------------------- 类型断言 ----------------------------------------- */
const str = '1'
const str2: number = <number><any>str   // number 是 any 的子集
// ❌ const str2: number = <number><string>str
console.log(str2)

/* ----------------------------------------- 类型推断 ----------------------------------------- */
let num: number | any = 12   // 类型推断为 number
console.log('num 变量的值为 ' + num)
num = '12'    // 编译错误
console.log(num)

/* ----------------------------------------- 函数重载 ----------------------------------------- */
/*function disp (x: number | string, y?: string): object {
  return { x, y }
}*/

function disp (s1: string): void
function disp (n1: number, s1: string): void
function disp (x: any, y?: any): void {
  console.log({ x, y })
}

disp('abc')
disp(1, 'xyz')
disp(null, undefined)
