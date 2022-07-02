import {useState, useEffect} from 'react'
import Header from './components/Header';
import axios from './utils/axios'

function Home() {
  let [professors, setProfessors] = useState([])

  async function getProfessors (){ 
   try {
    const response = await axios.get('/professors')

    setProfessors(response.data)
   } catch (error) {
    console.error(error)
   }
  }

  useEffect(() => {
    getProfessors()
  }, [])

  console.log({professors})
  
  return <div>
      <ul>
        {professors.map(function (professor, index) {
          return <li key={index}>{professor.name} {professor.cpf}</li>
        })}
    </ul>
  </div>
}

export default Home