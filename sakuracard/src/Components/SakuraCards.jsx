import React, {useEffect, useState} from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { unicCard } from '../Function/Function'




const SakuraCards = () => {
  const [sakura, setsakura] = useState([])
  const params = useParams()
  useEffect(()=>{
    unicCard(params.id, setsakura)
  },[])

  return (
    <>
    <h2>{sakura.spanishName}</h2>
    <img src={sakura.sakuraCard} alt="" />
    <p>{sakura.meaning}</p>

    </>
  )
}

export default SakuraCards
