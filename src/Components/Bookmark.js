import { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BookmarkContext } from "../Contexts/BookmarkState";
import Card from "./Card";
import news from '../news-1.png';
import news2 from '../news-2.png';
import news3 from '../news-3.png';
import news4 from '../news-4.png';
import news5 from '../news-5.png';
import thepeaks from '../thepeaks.png';

const Bookmark = () => {
    const contexts = useContext(BookmarkContext);
    const { showSearchResult } = useContext(BookmarkContext);
    const arrImage = [news, news2, news3, news4, news5, thepeaks];

    const navigate = useNavigate();
    const handleClick = useCallback(
        (id) => () => {
            showSearchResult(false)
            navigate(`/article?q=${id}`)
        },[]// eslint-disable-line react-hooks/exhaustive-deps
    )

    const generateImage = (arrImage) => {
        return arrImage[Math.floor(Math.random()*arrImage.length)];
    }
    return(
        <>
            <div className='sps-row'>
                <div className='sps-col sps-col-md-6'>
                    <h1>All bookmarks</h1>
                </div>
            </div>
            <div className='sps-row position-relative'>
            {
                contexts.bookmarks.map((bookmark, index) => {
                    let rndImage= generateImage(arrImage);
                    return(<div key={index} onClick={handleClick(bookmark.id)} className='sps-col sps-col-md-4 sps-col-sm-6'>
                        <Card
                            title={bookmark.webTitle}
                            description=""
                            height={347}
                            size="md"
                            bottomColor="#D32F2F"
                            backgroundImage={rndImage}
                        />
                    </div>)
                })

            }
            {(contexts.bookmarks.length ===0) && <div className="alert">
                <strong>Oop!</strong> There is no article in your bookmarks list.
            </div> }
            </div>
        </>
    )
}
export default Bookmark;