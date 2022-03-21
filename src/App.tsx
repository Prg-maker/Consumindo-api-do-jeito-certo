import { useEffect, useState } from "react"
import axios from 'axios'
import { useFetch } from "./hooks/useFetch"

type Repository = {
  full_name: string;
  description: string;
}



function App() {

  const {data: repositories , isFething} = useFetch<Repository[]>('/users/Prg-maker/repos')


  

  return (
    <h1>
      
      {isFething && <p>Carregandoo.....</p>}

      {repositories?.map( repo => {

      return(
        <li key={repo.full_name}>
          <strong>{repo.full_name}</strong>
          <p>{repo.description}</p>
      </li>
      )
   
    })}</h1>
  )
}

export default App
