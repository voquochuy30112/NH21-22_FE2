import React, { useState, useEffect } from 'react'
import Dice from './Dice'



function Games() {
  const [showDice, setShowDice] = useState(false)
  
  return (

    <div className='games' >
      <div className="container">
      
       <button className='btn-caro'  onClick={() => setShowDice(!showDice)}><h3>Dice</h3></button>
       <button className='btn-baucua'><h3>Bầu cua</h3></button>
       {showDice && <Dice />}
      </div>
    </div>
  )
}

export default Games
