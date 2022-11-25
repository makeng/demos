import React, { useState } from 'react'

// 列表项更新
function index() {
  const [count, setCount] = useState(0)

  function clickMain() {
    console.log('clickMain')
    setCount(count + 1)
  }

  return (
    <div className='page'>
      <button onClick={clickMain} />
      <div>{count}</div>
    </div>
  )
}
export default React.memo(index)
