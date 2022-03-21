import axios, { AxiosRequestConfig } from "axios"
import { useEffect , useState} from "react"


const api = axios.create({
  baseURL: 'https://api.github.com'
})


export function useFetch<T  = unknown>(url: string, options?: AxiosRequestConfig){

  const [data , setData] = useState<T | null>(null)
  const [isFething , setIsFething] = useState(true)
  const [error , setError] = useState<Error | null>(null)





  useEffect(()=> {
    axios.get(url , options)
    .then(response => {
      setData(response.data)
    })
    .catch(err => {
      setError(err)
    })
    .finally(()=> {
      setIsFething(false)
    })
   
  } , [])

  return {data , isFething}
}