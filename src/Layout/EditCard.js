import React, { useEffect } from 'react'
import { useParams, useHistory } from 
"react-router-dom";
import CreateForm from "./CreateForm";
import { readDeck, readCard, updateCard } from '../utils/api/index'; 

function EditCard({ deck, setDeck, card, setCard }) {
  const { deckId, cardId } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadDeck() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck)
    }
    loadDeck();
  }, [deckId, setDeck]);

  useEffect(() => {
    async function loadCard() {
      const cardRead = await readCard(cardId);
      setCard(cardRead)
       }
      loadCard();
    }, [cardId, setCard]);

    function setFront(event){
      setCard({ ...card, front: event.target.value })
    }
    
    function setBack(event){
      setCard({ ...card, back: event.target.value })
    }

  function handleSave (event) {
    event.preventDefault();
    updateCard(card).then((response) => history.push(`/decks/${deck.id}`))
  }

  function handleSubmit() {
    history.push(`/decks/${deck.id}`)
  }

  return (
    <div>
      <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
          <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
        </ol>
      </nav>
    </div>
    <div>
    <h1>Edit Card</h1>
    <CreateForm 
          setFront={setFront}
          setBack={setBack}
          handleSave={handleSave}
          handleSubmit={handleSubmit}
          cardValueFront={card.front}
          cardValueBack={card.back}
        />
  </div>
  </div>
  )
}

export default EditCard;