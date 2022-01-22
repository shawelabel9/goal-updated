import {ImageListItem, ImageList, ImageListItemBar} from '@material-ui/core'
import {Container} from '@material-ui/core'

const Clubs = ({clubs, term, input}) => {
    
            if(input.length>0){
                return (
                    <div className="imagelist">
                      <ImageList cols={5} gap={20} rowHeight={250}  >
                        { term.length !== 0 ? term.map((club)=>
                            <ImageListItem key={club.id} className='imagebox' >
                                <img src={club.image} alt={club.name}  className='logo'  />
                                <ImageListItemBar title={club.name} subtitle={club.stadium} >
                                </ImageListItemBar> 
    
                            </ImageListItem>):
                            <Container maxWidth="sm">No clubs match your search</Container>
                        }
                    </ImageList>
                    </div>
                )
            }else{
                return (
                    <div>
                      <ImageList cols={5} gap={20} rowHeight={250}  >
                        { clubs.map((club)=>
                            <ImageListItem key={club.id} className='imagebox' >
                                <img src={club.image} alt={club.name}  className='logo'  />
                                <ImageListItemBar title={club.name} subtitle={club.stadium} >
                                </ImageListItemBar> 
    
                            </ImageListItem>)
                        }
                    </ImageList>
                    </div>
                )
            }
  
}

export default Clubs
