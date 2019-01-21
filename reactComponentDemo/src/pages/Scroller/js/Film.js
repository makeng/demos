/*----------------------------------------------------------------------------------
* about:数据对象
* author:马兆铿
* date:
* ----------------------------------------------------------------------------------*/

function Data(id, desc) {
  this.id = id;
  this.desc = desc;
}

export default class Film {
  constructor() {
    this.list = [];
    this._index = 0;
    while (this._index < 50) {
      this.list.push(new Data(this._index, `I am No${this._index}`));
      this._index += 1;
    }
  }

  getMore() {
    for (let i = 1; i <= 50; i++) {
      this._index += 1;
      this.list.push(new Data(this._index, `I am No${this._index}`));
    }
  }
}


