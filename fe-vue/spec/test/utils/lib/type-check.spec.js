/* ---------------------------------------------------------------------------------------
* about:测试文件
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-07-29
* ---------------------------------------------------------------------------------------- */
import { isNumber } from '../../../../src/utils/lib/type-check'

describe('类型检查', () => {

  describe('数字和数字字符串', () => {
    const testList = [
      { test: 123, res: true },
      { test: '123', res: true },
      { test: undefined, res: false },
      { test: [], res: false },
      { test: '12dd', res: false },
      { test: '12 ', res: false },
    ]

    testList.forEach(item => {
      const { test, res } = item
      it(`${JSON.stringify(res)}  =  isNumber( ${JSON.stringify(item.test)} )`, () => {
        expect(isNumber(test)).toBe(res)
      })
    })
  })

})

