import style from './note.module.scss'

export default function Note ({ id, text, handleNoteContent }) {
    return (
        <div className={style.container}>
            <div contentEditable={true} onKeyUpCapture={e => { handleNoteContent(id, e.target.innerHTML) }}>{text}</div>
        </div>
    )
}