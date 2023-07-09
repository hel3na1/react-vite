import { useState,useEffect } from 'react'

import styles from "./style.module.css";



function App() {
  const [texto, setTexto] = useState('')
  const [numero, setNumero] = useState(1)
  console.log(texto)

  useEffect(() => {
    if (numero > 10){
      setTexto('o numero do usuario ultrapassou 10')
    }

  }, [numero])

  return (
    <>
       <p>{numero}</p> 
        <button
        onClick={() => setNumero(numero + 1)}
        className={styles.button}>
        some um numero
      </button> 
      <p>{texto}</p>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} type="text" />
    </>

  )
}

export default App
