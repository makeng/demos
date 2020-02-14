/*----------------------------------------------------------------------------------
* about:数据对象
* author:马兆铿
* date:
* ----------------------------------------------------------------------------------*/

// 数据类
class DataItem {
  constructor (id, desc) {
    /**
     * 创建随机字符串
     * @returns {string}
     */
    const createRandomString = () => Array.from(
      Array(parseInt(Math.random() * 10)),
      item => Math.random().toString()
    ).join('_')

    this.id = id
    this.desc = desc
    this.detail = createRandomString()
  }
}

// 仿真数据列表类
class DataList {
  constructor () {
    this.content = []
    this.itemCnt = 0 // item 数量，用于生成 id
  }

  appendDataItem (cnt) {
    const list = []
    for (let i = 1; i <= cnt; i++) {
      list.push(new DataItem(this.itemCnt, `I am No.${this.itemCnt}`))
      this.itemCnt += 1
    }
    this.content = this.content.concat(list)
  }
}

export {
  DataList
}
