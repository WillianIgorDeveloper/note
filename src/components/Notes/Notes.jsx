import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

import style from './notes.module.scss'

import Note from '../Note/Note'

export default function Notes () {

    const [notes, setNotes] = useState([])


    const handleNoteContent = (id, content) => {
        let newNotes = [...notes]
        notes.map((element, index) => {
            if (element.id === id){
                newNotes[index].text = content
            }
        })
        setNotes(newNotes)
    }


    useEffect(() => {
        const localNotes = localStorage.getItem('myNotes')
        const myNotes = JSON.parse(localNotes)
        if (myNotes.length === 0) {
            setNotes([
                {
                    id: nanoid(),
                    text: "Minhas anotações..."
                },
                {
                    id: nanoid(),
                    text: "Minhas anotações..."
                },
                {
                    id: nanoid(),
                    text: "Minhas anotações..."
                },
            ])
        } else {
            setNotes(localNotes)
        }
    }, [])

    useEffect(() => {
        const myNotes = JSON.stringify(notes)
        localStorage.setItem('myNotes', myNotes)
    }, [notes])


    return (
        <div className={style.container} >
            {notes.map(element => {
                return <Note key={element.id} id={element.id} text={element.text} handleNoteContent={handleNoteContent} />
            })}
        </div>
    )
}