import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Datas } from './Api'
import UseSelector from './UseSelector'
import NewComponent from './NewComponent'


function StateComponent() {
    const dispach = useDispatch()

    useEffect(() => {
      Datas(dispach)
    }, [])
    
  return (
      <div>
      <UseSelector />
      <NewComponent/>
    </div>
  )
}

export default StateComponent