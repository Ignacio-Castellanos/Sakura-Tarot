import React, {useEffect, useState} from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { unicCard } from '../Function/Function'

const ClowCards = () => {
  
  const [clow, setClow] = useState([])
  const params = useParams()
  useEffect(()=>{
    unicCard(params.id, setClow)
  },[])

  return (
  <>
    <h2>{clow.spanishName}</h2>
    <img src={clow.clowCard} alt="" />
    <p>{clow.meaning}</p>
  
  </>
  )
}

export default ClowCards