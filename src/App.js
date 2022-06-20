import { useState } from 'react'
import Notes from './components/Node/AppNotes'
import Games from './components/Games'

function App() {
    const [showNote, setShowNote] = useState(false)
    const [showGame, setShowGame] = useState(false)
   
    return (
        <div className='all'>
            <div className="container">
                <button className='btn-game' onClick={() => setShowGame(!showGame)}><h2>Games</h2></button>
                <button className='btn-note' onClick={() => setShowNote(!showNote)}><h2>Notes</h2></button>
                {showNote && <Notes />}
                {showGame && <Games />}
            </div>
        </div>
    )
}

export default App