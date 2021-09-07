import React from 'react'


function CreateForm({ setFront, setBack, handleSave, handleDone, cardValueFront, cardValueBack }) {

    return (
      <form>
        <div className="mb-3">
          <label className="form-label">Front</label>
            <textarea
              type="text" className="form-control" 
              id="front"
              placeholder="Front side of the card"
              value={cardValueFront}
              rows="3"
              onChange={setFront}/> 
          </div>
        <div className="mb-3">
          <label className="form-label">Back</label>
            <textarea className="form-control" id="back" 
            placeholder="Back side of card"
            value={cardValueBack}
            rows="3"
            onChange={setBack}
            />
        </div>
          <button type="done" className="btn btn-secondary" onClick={handleDone}>Done</button>
          <button type="submit" className="btn btn-primary" onClick={handleSave}>Save</button>
      </form>
    );
  }

  export default CreateForm;