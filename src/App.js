import { useState } from 'react'
import Notes from './Notes'

function App() {
    const [showNote, setShowNote] = useState(false)

    return (
        <div className='all'>
            <div className="container">
                <button className='btn-game'><h2>Games</h2></button>
                <button className='btn-note' onClick={() => setShowNote(!showNote)}><h2>Notes</h2></button>
                {showNote && <Notes />}
            </div>
        </div>

    )

}

export default App