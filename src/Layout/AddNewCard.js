import React, { useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { readDeck, createCard } from '../utils/api/index'; 
import CreateForm from './CreateForm';


function AddNewCard({deck, setDeck, card, setCard}) {
  const history = useHistory();
  const { deckId } = useParams();

  useEffect(() => {
    async function loadDecks() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck);
    }
    loadDecks();
  }, [deckId, setDeck]);

  function setFront(event){
    setCard({ ...card, front: event.target.value })
  }
  
  function setBack(event){
    setCard({ ...card, back: event.target.value })
  }

  function handleDone() {
    history.push(`/decks/${deck.id}`)
  }

  function handleSave(event) {
    event.preventDefault();
    async function updateCard() {
      await createCard(deckId, card);
    };
    updateCard();
    setCard({
      front: "",
      back: "",
      deckId: deckId,
    })
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
          <li className="breadcrumb-item active" aria-current="page">Add Card</li>
        </ol>
      </nav>
      <div>
        <h1>{deck.name}: Add Card</h1>
        <CreateForm 
          setFront={setFront}
          setBack={setBack}
          handleSave={handleSave}
          handleDone={handleDone}
          cardValueFront={card.front}
          cardValueBack={card.back}
        />
      </div>
  </div>
  )
}

export default AddNewCard;