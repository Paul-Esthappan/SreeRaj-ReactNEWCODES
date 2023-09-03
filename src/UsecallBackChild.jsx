import React from 'react'

function UsecallBackChild({values}) {
    console.log('child Rentered');
  return (
      <div>
          
    </div>
  )
}

export default UsecallBackChild
export const Memo = React.memo(UsecallBackChild)