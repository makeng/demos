import React from 'react'

// 列表项更新
class ListItemUpdate extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  /* ----------------------------------------- 生命周期 ----------------------------------------- */
  componentDidMount() {
    setTimeout(() => {
      function selectBranchFn(i) {
        // you can move branch outside
        const branch = {
          1: () => console.log(),
          2: () => console.log(),
          3: () => console.log(),
          4: () => console.log(),
          6: () => console.log(),
          7: () => console.log(),
          8: () => console.log(),
          9: () => console.log(),
          10: () => console.log(),
          11: () => console.log(),
          12: () => console.log(),
          13: () => console.log(),
          14: () => console.log()
        }
        return branch[i]
      }

      console.time('go')
      for (let i = 0; i < 1000; i++) {
        const fn = selectBranchFn(i)
        if (fn) fn()
      }
      console.timeEnd('go')

    }, 50)
  }

  /* ----------------------------------------- 自定义方法 ----------------------------------------- */


  /* ----------------------------------------- 绑定方法 ----------------------------------------- */

  /* ----------------------------------------- 渲染 ----------------------------------------- */
  render() {
    return (
      <h1 className="page-files">
        please check memory
      </h1>
    )
  }
}

export default ListItemUpdate
