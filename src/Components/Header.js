import '../Scss/Header.scss'
import logo from '../logo.svg'
import { useNavigate } from 'react-router-dom'
import { BookmarkContext } from "../Contexts/BookmarkState";
import { useContext } from 'react';

const Header = () =>{

    const {addKeywords, showSearchResult } = useContext(BookmarkContext);

    const handleChange = (e) => {
        if(e.target.value){
            showSearchResult(true)
        }else{
            showSearchResult(false)
        }
        addKeywords(e.target.value)
    };

    const navigate = useNavigate();
    const handleClick = () => {
        addKeywords('')
        navigate("/")
    }

    return(
        <>
            <nav>
                <div className='sps-container'>
                    <div className='sps-row'>
                        <div className='sps-col sps-col-sm-6  sps-col-md-6 logo-container' style={{justifyContent: 'left', alignItems: 'center', display: 'flex'}}>
                            <img style={{cursor: 'pointer'}} src={logo} alt="Logo" onClick={handleClick} />
                        </div>
                        <div className='sps-col sps-col-sm-6  sps-col-md-6' style={{justifyContent: 'right', alignItems: 'flex-end', display: 'flex'}}>
                            <input onKeyUp={handleChange} type="text" className='btn-search' />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header