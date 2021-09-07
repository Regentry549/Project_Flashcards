import React from 'react';
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();

  function handleCreateDeck(event) {
    event.preventDefault();
    history.push("/decks/new");
  }

  return (
    <div>
      <div class="row mx-md-5 py-md-2">
        <button
        type="button"
        className="btn btn-secondary"
        onClick={handleCreateDeck}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
      </svg>
        Create Deck
        </button>
      </div>
    </div>
  )
}

export default Home;