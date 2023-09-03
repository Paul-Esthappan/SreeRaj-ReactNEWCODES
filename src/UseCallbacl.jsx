import React, { useCallback, useState } from 'react'
// import UsecallBackChild from './UsecallBackChild';
import { Memo } from './UsecallBackChild';

function UseCallbacl() {
    const [state, setstate] = useState(0)
    console.log("parent");
    const callback = () => {
        setstate(state+1)
    }

    const handleClick = () => { }
    
    const callBacking = useCallback(handleClick, [])

  return (
      <div>
          <h1>{state}</h1>
          <button onClick={callback}>CallBack</button>
          {/* <UsecallBackChild values={handleClick} /> */}
          <Memo values={callBacking} />
    </div>
  )
}

export default UseCallbacl
