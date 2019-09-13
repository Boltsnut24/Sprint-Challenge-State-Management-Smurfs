import React, {useState, useEffect} from 'react';
import Axios from 'axios';

export default function SmurfForm(props){
  const [nameState, setName] = useState('new name');
  const [ageState, setAge] = useState('new age');
  const [heightState, setHeight] = useState('new height');

  const handleSubmit = event => {
    event.preventDefault();
    Axios.post('http://localhost:3333/smurfs', {
      name: nameState,
      age: ageState,
      height: heightState
    })
    .then(response => {
      console.log("Post response: ", response)
    })
  }


  return(
    <form onSubmit={handleSubmit}>
      <input type='text' value={nameState} onChange={e => setName(e.target.value)}/>
      <input type='text' value={ageState} onChange={e => setAge(e.target.value)}/>
      <input type='text' value={heightState} onChange={e => setHeight(e.target.value)}/>
      <button type='submit'> Add Smurf </button>
    </form>
  )
}


  