import React, { useEffect, useState } from 'react'
import '../../style/pages/HooksStrange.less'

const prefixCls = 'hooks-strange'

// 列表项更新
function index() {
  const [count, setCount] = useState(0)

  function clickMain() {
    console.log('clickMain')
    setCount(count + 1)
  }

  function rerenderChild() {
    console.log('rerenderChild')
  }

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}__num`}>{count}</div>
      <button
        className={`${prefixCls}__button`}
        onClick={clickMain}
      >Add count
      </button>
      <Child
        key={count}
        rerender={rerenderChild}
      />
    </div>
  )
}

function Child(props) {
  useEffect(() => {
    props.rerender()
  }, [])

  return (
    <div>child</div>
  )
}

export default React.memo(index)
