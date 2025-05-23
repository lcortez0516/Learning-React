import { useEffect, useState } from "react"

const App = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isloading, setIsLoading] = useState(true)

// abort controller
const controller = new AbortController();
  // basic fetch + useEffect

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
    .then(res=> {
      if(!res.ok){
        throw new Error('Network error')
      }
       return res.json()
    })
    .then(data => {
      setData(data)
      setIsLoading(!isloading)
    })
    .catch(error=> {
      setError(error)
      setIsLoading(!loading)
    })

    return ()=> controller.abort()
  }, [])
 


  return (
    <div>
      {data && data.map((user, index)=> (
        <p key={index}>{user.name}</p>
      ))}
    </div>
    
  )
}

export default App