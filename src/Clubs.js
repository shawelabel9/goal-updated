import {ImageListItem, ImageList, ImageListItemBar} from '@material-ui/core'

const Clubs = ({clubs}) => {
    
    return (
        <div>
          <ImageList cols={4} gap={20} rowHeight={250} >
            {clubs.map((club, index)=>
                <ImageListItem key={club.id}  >
                    <img src={club.image} alt={club.name} width='150px' height='150px'/>
                    <ImageListItemBar title={club.name} subtitle={club.stadium} >
                        
                    </ImageListItemBar>

                </ImageListItem>
            )}
        </ImageList>
        </div>
    )
}

export default Clubs
