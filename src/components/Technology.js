import React from 'react'
import ShowNews from './ShowNews';

function Technology({props}) {
  return (
    <div>
      {props === 'technology' && <ShowNews/>}
    </div>
  )
}

export default Technology
