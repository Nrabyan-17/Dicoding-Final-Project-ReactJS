import { MdSearch } from 'react-icons/md';

const Searchbar = ({ setSearch }) => {

    return (
        <>
            <div className="search-bar">
                <MdSearch className="search-icon" size="1.9em"/>
                <input style={{ borderRadius: "17px", paddingLeft: "47px", width: "100%", fontSize: "19px", backgroundColor: "whitesmoke", border: "none"}} 
                       type="text" 
                       placeholder="Search..." 
                       onChange={((e) => setSearch(e.target.value))}
                />
            </div>
        </>
    );
}

export default Searchbar