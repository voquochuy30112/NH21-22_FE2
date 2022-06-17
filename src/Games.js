import React, { useState, useEffect } from 'react'
import Flip from './Flip'



function Games() {
  const [showFlip, setShowFlip] = useState(false)
  
  return (

    <div className='games' >
      <div className="container">
      
       <button className='btn-caro'  onClick={() => setShowFlip(!showFlip)}><h3>Caro</h3></button>
       <button className='btn-baucua'><h3>Bầu cua</h3></button>
       {showFlip && <Flip />}
      </div>
    </div>
  )
}

export default Games
