import React from 'react'
import { MdDeleteForever } from 'react-icons/md'


function Note({ id, text, date, handleDelete }) {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <span>{date}</span>
                <MdDeleteForever onClick={() => handleDelete(id)} className="delete-icon" />
            </div>
        </div>
    )
}

export default Note
