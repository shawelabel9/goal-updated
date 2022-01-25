import Clubs from './Clubs.js'
import {useState, useEffect} from 'react'



function App() {

  const [clubs,setClubs] = useState([])
  const [input,setInput] = useState([])
  const [searchWord,setSearchWord] = useState([])


  useEffect(()=>{
    const fetchClubs = async () => {
      const res = await fetch('http://localhost:5000/clubs')
      const data = await res.json()
  
      setClubs(data)
    }
    fetchClubs()
  },[])
  
  
 
  const handleChange = (item) => {
      setInput(item)
      if(input.length !== ''){
        const filteredData = clubs.filter((items) => {
          if(items.name.toLowerCase().includes(item.toLowerCase())){
            return items
          }
        })
        
      setSearchWord(filteredData)}
       
  }
  return(
    <div>
      <Clubs clubs = {clubs} term= {searchWord} input = {input} handleChange={handleChange}/>
    </div>
  )
  
}

export default App;
