import React from 'react'
import { newToken } from './Login';

export const Movie = (props) => {

    const serachMovie =async () => {
        var val = newToken;

        let data = await  fetch("https://demo.credy.in/api/v1/maya/movies/", {
            method: "GET",
           header:  {"Authorization": `${val}`} 
        })
        let parsedData = await data.json();
        console.log(parsedData);
        console.log(val + "in movie ");
    }

  return (
    <div>
     <button onClick={serachMovie}>Click mE</button>
      <h1>Movie element</h1>
    </div>
  )
}
