import axios from 'axios'
import { useEffect } from 'react';
import {
  useQuery
} from 'react-query'
import { Link } from 'react-router-dom';

export type Repository = {
  full_name: string;
  description: string;
}


export function Repos() {
 
  const {
    data,
    isFetching
  } = useQuery<Repository[]>('repos' , async  ()=> {
    const response = await axios.get('https://api.github.com/users/Prg-maker/repos')

    console.log(data)

    return response.data;
  } ,{
    staleTime: 1000 * 60 // 1 minuto
  })

  

  return (
    <h1>
      {isFetching && <p>Carregando...</p>}
      {
        data?.map(repo => {
          return(
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <Link to={`repo/${repo.full_name}`}>{repo.description}</Link>
            </li>
          )
        })
      }
      
    </h1>
  )
}

