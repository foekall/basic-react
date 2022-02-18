import { useState, useEffect, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookmarkContext } from '../Contexts/BookmarkState'
import Card from "./Card"
import Loading from './Loading'
import news from '../news-1.png';
import news2 from '../news-2.png';
import news3 from '../news-3.png';
import news4 from '../news-4.png';
import news5 from '../news-5.png';
import thepeaks from '../thepeaks.png';
import axios from "axios"

const Sports = () => {

    const [sports, setSports] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { showSearchResult } = useContext(BookmarkContext);
    const arrImage = [news, news2, news3, news4, news5, thepeaks];

    useEffect(() => {
        const fetchSports = () => {
            setIsLoading(true)
            axios.get('https://content.guardianapis.com/search?section=sport|culture|lifestyle&order-by=newest&page-size=3&api-key=6128ffae-7fdc-4f8a-814e-e2e7f61c7d59')
            .then((result) => {
                setSports(result.data.response.results)
                setIsLoading(false)
            }).catch(err=>{
                setIsLoading(false)
            })
        }
        fetchSports()
    }, [])

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
                    <h1>Sports</h1>
                </div>
            </div>
            <div className='sps-row position-relative'>
            {isLoading && <Loading/>}
            {
                (sports.map((sport, index) => {
                    let rndImage= generateImage(arrImage);
                    return(<div data-testid="sps-card" key={index} onClick={handleClick(sport.id)} className='sps-col sps-col-md-4 sps-col-sm-6'>
                        <Card
                            title={sport.webTitle}
                            description=""
                            height={347}
                            size="md"
                            bottomColor="#D32F2F"
                            backgroundImage={rndImage}
                        />
                    </div>)
                }))
            }
            </div>
        </>
    )
}

export default Sports;