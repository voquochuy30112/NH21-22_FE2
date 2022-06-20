import React, { useState } from 'react'
import AppDice from './Dice/AppDice'
import AppCaro from './Caro/AppCaro'



function Games() {
  const [showDice, setShowDice] = useState(false)
  const [showCaro, setShowCaro] = useState(false)
  
  return (

    <div className='games' >      
       <button className='btn-dice'  onClick={() => setShowDice(!showDice)}><h3>Dice</h3></button>
       <button className='btn-caro' onClick={() => setShowCaro(!showCaro)}><h3>Caro</h3></button>
       {showDice && <AppDice />}
       {showCaro && <AppCaro />}
    </div>
  )
}

export default Games
