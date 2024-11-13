import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [data, setData] = useState([])
  const url = "http://localhost/CE-Camargo-Esportes-/Back-end/get_tasks.php"
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => setData(data))
  }, [])


  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1 className='font-semibold text-lg' >{item.titulo}</h1>
          <p className='font-normal text-sm'>{item.conteudo}</p>
        </div>
      ))}
    </div>
  )
}

export default App
