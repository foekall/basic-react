import Card from "./Card";
import Loading from "./Loading";
import { useState, useCallback, useRef, useEffect, useContext } from 'react';
import useSearchResult from '../Hooks/useSearchResult';
import { useNavigate } from "react-router-dom";
import { BookmarkContext } from "../Contexts/BookmarkState";
import news from '../news-1.png';
import news2 from '../news-2.png';
import news3 from '../news-3.png';
import news4 from '../news-4.png';
import news5 from '../news-5.png';
import thepeaks from '../thepeaks.png';

const SearchResult = ({query, sortDirection}) => {
    const { showSearchResult } = useContext(BookmarkContext);
    const [pageNum, setPageNum] = useState(1);
    const { isLoading, searchResults, hasMore } = useSearchResult(query, pageNum, sortDirection);
    const observer = useRef();
    const arrImage = [news, news2, news3, news4, news5, thepeaks];
    const lastBookElementRef = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                setPageNum((prev) => prev + 1);
            }
        });
        if (node) observer.current.observe(node);
        },[isLoading, hasMore]
    );

    useEffect(()=>{
        setPageNum(1)
    },[query])

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

    return (
        <>
        <div className='sps-row'>
            {searchResults.map((result, i) => {

                if (searchResults.length === i + 1) {
                    let rndImage= generateImage(arrImage);
                    return (
                        <div key={i} onClick={handleClick(result.id)} ref={lastBookElementRef} className='sps-col sps-col-md-4 sps-col-sm-6'>
                            <Card
                                title={result.webTitle}
                                description=""
                                height={347}
                                size="md"
                                bottomColor="#D32F2F"
                                backgroundImage={rndImage}
                            />
                        </div>
                    )
                } else {
                    let rndImage= generateImage(arrImage);
                    return(
                        <div key={i} onClick={handleClick(result.id)} className='sps-col sps-col-md-4 sps-col-sm-6'>
                            <Card
                                title={result.webTitle}
                                description=""
                                height={347}
                                size="md"
                                bottomColor="#D32F2F"
                                backgroundImage={rndImage}
                            />

                        </div>
                    )
                }
            })}
        </div>
        <div>{ (isLoading) && <Loading /> } </div>
        </>
    )
}

export default SearchResult;