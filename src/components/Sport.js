import React from 'react';
import ShowNews from './ShowNews';

function Sport({category}) {
  
  return (
     <div>
      {category === 'technology' && <ShowNews/>}
      
    </div> 
  )
}

export default Sport
