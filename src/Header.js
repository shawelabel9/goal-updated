const Header = ({onSearch}) => {
  
    return (
        <div className="header">
         <h1>Clubs</h1> 
         <input type='text' placeholder='search' className='text-box'  className='searchBox'
          onChange={(e)=>onSearch(e.target.value) }/>
        </div>
    )
}

export default Header
