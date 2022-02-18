import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { BookmarkContext } from "../Contexts/BookmarkState";

const SearchBar = ({onSorting, title}) => {

    const contexts = useContext(BookmarkContext);

    return(
        <div className='sps-row'>
            <div className='sps-col sps-col-md-6'>
            <h1>{title}</h1>
            </div>
            <div className='sps-col sps-col-md-6' style={{justifyContent: 'right', alignItems: 'center', display: 'flex'}}>
                <Link to="/bookmarks" >
                    <button className='sps-btn sps-btn-primary mr-5'>
                        <FontAwesomeIcon icon={faBookmark} className="mr-2"/>VIEW BOOKMARK ({contexts.bookmarks.length})
                    </button>
                </Link>
                <select className='sps-input' onChange={onSorting}>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBar