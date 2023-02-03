import axios from 'axios';

const allCards = async (state) => {
    const ask = await axios.get('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
    state(ask.data)
}

const unicCard = async (id, state) => {
    const ask = await axios.get(`https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/${id}`)
    state(ask.data)
}


export {
    allCards,
    unicCard
    
}