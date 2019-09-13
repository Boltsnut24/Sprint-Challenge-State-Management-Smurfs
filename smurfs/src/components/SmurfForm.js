import React, {useState, useEffect} from 'react';
import Axios from 'axios';

export default function SmurfForm(props){
  console.log("props in smurfForm:", props)

  const [input, setInput] = useState({
    name: 'New Name',
    age: 0,
    height: 'Height in cm'
  });

  const handleSubmit = event => {
    event.preventDefault();
    props.addSmurf(input);
    setInput({
      name: 'New Name',
      age: 0,
      height: 'Height in cm'
    });
  }


  return(
    <form onSubmit={handleSubmit}>
      <input type='text' value={input.name} onChange={e => setInput(e.target.value)}/>
      <input type='text' value={input.age} onChange={e => setInput(e.target.value)}/>
      <input type='text' value={input.height} onChange={e => setInput(e.target.value)}/>
      <button type='submit'> Add Smurf </button>
    </form>
  )
}

function usePost(event, input){
  event.preventDefault();
    useEffect(() => {
      Axios.post('http://localhost:3333/smurfs', {
        name: input,
        age: 200,
        height: '4cm'
      })
      .then(response => {
        console.log("Post response: ", response)
      })
    })
}
  