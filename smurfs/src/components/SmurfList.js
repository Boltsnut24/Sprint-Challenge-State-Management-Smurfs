import React from 'react';

export default function SmurfList(props){
  console.log(props)

  return(
    <div>
      {
        props.smurfs.map(smurf => {
          return(
          <div>
            <h2>{smurf.name}</h2>
          </div>

          )
        })
      }
    </div>
  )
}