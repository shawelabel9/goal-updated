import Header from './Header.js'
import Clubs from './Clubs.js'
import {useState, useEffect} from 'react'

function App() {

  const [clubs,setClubs] = useState([])

  useEffect(()=>{
    const fetchClubs = async () => {
      const res = await fetch('http://localhost:5000/clubs')
      const data = await res.json()
  
      setClubs(data)
    }
    fetchClubs()
  },[])

  return(
    <div>
    <Header/>
    <Clubs clubs = {clubs} />
    </div>
  )
  
}

export default App;
