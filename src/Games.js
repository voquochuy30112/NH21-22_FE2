import React, { useState } from 'react'
import Dice from './Dice'



function Games() {
  const [showDice, setShowDice] = useState(false)
  
  return (

    <div className='games' >      
       <button className='btn-dice'  onClick={() => setShowDice(!showDice)}><h3>Dice</h3></button>
       <button className='btn-caro'><h3>Caro</h3></button>
       {showDice && <Dice />}
    </div>
  )
}

export default Games
