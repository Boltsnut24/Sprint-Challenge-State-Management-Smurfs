import React from 'react';

const box = {
  border: '1px solid black',
  width: '60%',
  margin: '5px auto',
}

export default function SmurfList(props){
  console.log('list:', props)

  return(
    <div>
      {
        props.smurfs.map(smurf => {
          return(
          <div style={box}>
            <h2>{smurf.name}</h2>
            <h2>{smurf.age}</h2>
            <h2>{smurf.height}</h2>
          </div>

          )
        })
      }
    </div>
  )
}