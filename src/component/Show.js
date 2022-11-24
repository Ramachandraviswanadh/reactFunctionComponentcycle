import React from 'react'

function Show() {
    const [disp,setDisp]=React.useState(false)
  return (
    <>
     {disp && <h1>i qam here</h1>}
    <button onClick={()=>setDisp(!disp)}>show</button>
    </>
  )
}

export default Show