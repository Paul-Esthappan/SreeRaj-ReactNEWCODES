import React from 'react'
import { useSelector } from 'react-redux'

function UseSelector() {
    const datass = useSelector(state=>state.data.info)
    console.log('======',datass)
  return (
      <div>
          <h1>hii</h1>
          
    </div>
  )
}

export default UseSelector