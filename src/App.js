import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [data,setData] = useState([])
  const [isLoading,setIsLoading]= useState(true)
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
      const jsonData = await resp.json()
      setData(jsonData)
    } catch (error){
      console.error('Error',error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className="App">
      <button onClick={fetchData}>UPDATE</button>
      {
        isLoading ?
            ( <h3>Loading...</h3> )
            : data.map(item => {
              return <div className='json-data' key={item.id}>
                <span>"userId:" {item.userId}</span>
                <p>"id:" {item.id}</p>
                <p>"title:" {item.title}</p>
                <p>"body:" {item.body}</p>
              </div>
            } )
      }
    </div>
  );
}

export default App;
