/*----------------------------------------------------------------------------------
* about:数据对象
* author:马兆铿
* date:
* ----------------------------------------------------------------------------------*/

// 数据类
class DataItem {
  constructor (id, desc) {
    this.id = id
    this.desc = desc
  }
}

// 仿真数据列表类
class DataList {
  static id = 0

  constructor () {
    this.content = []
  }

  appendDataItem (cnt) {
    const list = []
    for (let i = 1; i <= cnt; i++) {
      list.push(new DataItem(DataList.id, `I am No.${DataList.id}`))
      DataList.id += 1
    }
    this.content = this.content.concat(list)
  }
}

export {
  DataList
}
