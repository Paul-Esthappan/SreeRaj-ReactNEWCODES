import React from 'react'
import { useSelector } from 'react-redux'

function NewComponent() {
  const datas = useSelector((state) => state.data.info[0]);
  
    console.log('@@@',datas);
    return (
      <div>
        <h1>new page</h1>
        {datas&&datas.map((dis) => (
          <h1>{dis.name}</h1>
        ))}
      </div>
    );
}

export default NewComponent