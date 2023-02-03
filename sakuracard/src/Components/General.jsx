import React, {useEffect, useState} from 'react'
import { allCards } from '../Function/Function'




const General = () => {
  const [SakuraCards, setSakuraCards] = useState(null)
  const [shot, setShot] = useState(null)


  useEffect(()=>{
    allCards(setSakuraCards)
  }, [])
  
const shuffle = () => {
const shakingCards = SakuraCards.sort(() => Math.random() -0.5)
console.log(shakingCards)
}
  
useEffect(() =>{
  allCards (setShot)
  
    }, [])

    const shotme = () => {
      const threeCards = SakuraCards.filter((card, index) => index < 3)
      console.log (threeCards)

     }
  
  
  return (
    <>
      {SakuraCards != null ? (
        SakuraCards.map(SakuraCards => (
          <div key={SakuraCards.id}>
            <a href={`/SakuraCards/${SakuraCards.id}`}>
              <img src={SakuraCards.cardsReverse.sakuraReverse}className='rounded float-start' height={100} width={75}   alt="" />
              </a>
            
          </div>
        ))
      ) : ('No hay Cartas')}
    <button onClick={shuffle}>Shuffle</button>
    <button onClick={shotme}>Shotme</button>

    </>

  )

  }
  


export default General
