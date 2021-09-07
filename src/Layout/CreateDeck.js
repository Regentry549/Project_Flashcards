import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { createDeck } from '../utils/api/index'; 

function CreateDeck() {
  let history = useHistory();
  const [newDeck, setNewDeck] = useState()



  function changeName(event) {
    setNewDeck({ ...newDeck, name: event.target.value });
  }

  function changeDesc(event) {
    setNewDeck({ ...newDeck, description: event.target.value });
  }

  function handleCancel(event) {
    event.preventDefault();
    history.push("/");
  }
  
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createDeck(newDeck);
    history.push(`/decks/${response.id}`);
    
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
        </ol>
      </nav>

    <form>
      <h1>Create Deck</h1>
    <div className="mb-3">
      <label 
      className="form-label">Name</label>
      <input 
        type="text" className="form-control" 
        id="name"
        placeholder="Deck Name"
        required
        onChange={changeName}/> 
    </div>
    <div className="mb-3">
      <label className="form-label">Description</label>
      <textarea className="form-control" id="description" 
      placeholder="Brief description of the deck"
      rows="5"
      required
      onChange={changeDesc}
      />
    </div>

    <button type="submit" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>

    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>

  </div>
  )
}

export default CreateDeck;