import './Search.scss';

const Search = () => {
    return (
        <>
            <div className="search">
                <img src="https://img.icons8.com/ios/20/null/search--v1.png" alt='icon-search' className='icon-search'/>
                <input placeholder="Search"/>
            </div>
            <hr style={{ margin: 0 }}/>
        </>
    )
}

export default Search