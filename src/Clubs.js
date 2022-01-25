import {ImageListItem, ImageList, ImageListItemBar} from '@material-ui/core'
import {Container} from '@material-ui/core'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Clubhome from './Clubhome.js'
import Header from './Header.js'
import {useState} from 'react'

const Clubs = ({clubs, term, input, handleChange}) => {

    const [home,setHome] = useState()    

    if(input.length>0){
                return (
                    <Router>
                        <Routes>
                            <Route path='/' element={
                                
                                <div className="imagelist">
                                <Header  onSearch={handleChange}/>
                                <Link to='/home' >
                                <ImageList cols={5} gap={20} rowHeight={250} 
                                >
                                   {term.length !== 0 ? term.map((club)=>
                                       <ImageListItem key={club.id} className='imagebox'>
                                          <img src={club.image} alt={club.name}  className='logo' />
                                           <ImageListItemBar title={club.name} subtitle={club.stadium} >
                                           </ImageListItemBar> 
                                       </ImageListItem>):
                                       <Container maxWidth="sm">No clubs match your search</Container>
                                   }
                               </ImageList>
                                </Link>
                                </div>
                                                          
                            }>
                    
                        </Route>
                        <Route path='/home' element={<Clubhome/>} ></Route>
                     </Routes>
                     </Router>
                    
                )
            }else{
                return (
                    <Router>
                        <Routes>
                            <Route path='/' element={
                                
                                <div className="imagelist">
                                <Header  onSearch={handleChange}/>
                                <Link to='/home' >
                                <ImageList cols={5} gap={20} rowHeight={250} 
                                >
                                   {clubs.map((club)=>
                                       <ImageListItem key={club.id} className='imagebox' value={home} 
                                       onClick={()=>setHome(club)} >
                                          <img src={club.image} alt={club.name}  className='logo' />
                                           <ImageListItemBar title={club.name} subtitle={club.stadium} >
                                           </ImageListItemBar> 
                                       </ImageListItem>)   
                                   }
                               </ImageList>
                                </Link>
                                </div>
                                 
                            } >
                            </Route>
                            <Route path='/home' element={<Clubhome club={home} />}> </Route>
                        </Routes>
                    </Router>
                )
            }
  
}

export default Clubs
