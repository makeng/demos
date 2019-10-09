/* ---------------------------------------------------------------------------------------
* about:测试文件
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-08-15
* ---------------------------------------------------------------------------------------- */

import { checkLegalName } from '../../../../src/utils/businese/regular'

describe('正则', () => {

  describe('中文、英文、数字，不包括标点', () => {
    const testList = [
      { test: '1u8你好', res: true },
      { test: '我好。', res: false },
      { test: 'doo&&&^^%', res: false },
      { test: 1234, res: true },
      { test: 1234.9, res: false },
      { test: '1234.9', res: false },
      { test: true, res: false },
      { test: { key: 5 }, res: false },
      { test: [1, 2, 3], res: false }
    ]

    testList.forEach(item => {
      it(item.res + '  =  checkLegalName( ' + JSON.stringify(item.test) + ' ) ', () => {
        expect(checkLegalName(item.test)).toBe(item.res)
      })
    })
  })

})
