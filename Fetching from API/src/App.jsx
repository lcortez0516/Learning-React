import { useEffect, useState } from "react"

const App = () => {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const controller = new AbortController()

  useEffect(async ()=> {

      try {
         const res = await fetch('https://jsonplaceholder.typicode.com/users',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer KEY'
          },
          body: JSON.stringify({
            username: 'Lester',
            password: 'password'
          })
         }, {signal: controller})
         if(!res.ok){
          throw new Error('Network Error')
         }
         const data = await res.json()
         if(data) {
          setData(data)
         }else{
          setError('There was a problem with the data')
         }
         
      } catch (error) {
        console.error('Fetch failed: ', error.message)
      }
   

    return () => {
      controller.abort()
    }
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