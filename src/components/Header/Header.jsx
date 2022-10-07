import { useEffect, useState } from "react"
import { Check, PencilSimple } from 'phosphor-react'

import style from './header.module.scss'

export default function Header () {
    
    const [userName, setUserName] = useState("edite seu nome")
    const [wellcomeMessage, setWellcomeMessage] = useState("")
    const [hiden, setHiden] = useState(false)
  
    useEffect(() => {
      const time = new Date()
      const hours = time.getHours()
  
      if(hours >= 0 && hours <= 5) {
        setWellcomeMessage("Boa Madrugada")
      } else if (hours >= 6 && hours <= 11) {
        setWellcomeMessage("Bom Dia")
      } else if (hours >= 12 && hours <= 17) {
        setWellcomeMessage("Boa Tarde")
      } else if (hours >= 18 && hours <= 23) {
        setWellcomeMessage("Boa Noite")
      }
    },[])

    return (
        <header className={style.header}>
            <h1>{wellcomeMessage},</h1>
            <div className={`${style.userName} ${ hiden ? style.hiden : ''}`}>
            <span>{userName}!</span>
            <span title="Editar nome" onClick={() => {setHiden(true)}}>
                <PencilSimple className={style.pencilSimple} weight="bold"  />
            </span>
            </div>
            <div className={`${style.editName} ${ hiden ? '' : style.hiden}`}>
            <input type="text" placeholder="Digite o seu nome..." maxLength={15} onKeyUp={ e => e.key === 'Enter' ? setHiden(false) : ''} onChange={e => { setUserName(e.target.value) } } onBlur={() => { setHiden(false)}} />
            <span title="Concluir" onClick={() => { setHiden(false) }}>
                <Check className={style.check} />
            </span>
            </div>
        </header>
    )
}