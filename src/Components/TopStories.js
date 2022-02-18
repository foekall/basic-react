import Card from "./Card"
import Loading from "./Loading"
import { useState, useEffect, useContext, useCallback } from 'react'
import { BookmarkContext } from '../Contexts/BookmarkState'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import news from '../news-1.png';
import news2 from '../news-2.png';
import news3 from '../news-3.png';
import news4 from '../news-4.png';
import news5 from '../news-5.png';
import thepeaks from '../thepeaks.png';

const TopStories = ({sortDirection}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [stories, setStories] = useState([])
    const { showSearchResult } = useContext(BookmarkContext);
    const arrImage = [news, news2, news3, news4, news5, thepeaks];

    useEffect(() => {
        const fetchTopStories = () => {
            setIsLoading(true)
            axios.get(`https://content.guardianapis.com/search?section=news&order-by=${sortDirection}&page-size=8&api-key=6128ffae-7fdc-4f8a-814e-e2e7f61c7d59`)
            .then((result) => {
                setStories(result.data.response.results)
                setIsLoading(false)
            }).catch(err=>{
                setIsLoading(false)
            })
        }
        fetchTopStories()
    },[sortDirection])

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
             <div data-testid="top-stories" className='sps-row'>
                {
                    (stories.map((story, index) => {
                        if( index === 0){
                            let rndImage= generateImage(arrImage);
                            return(
                                <div data-testid="sps-card" key={index} onClick={handleClick(story.id)} className='sps-col sps-col-md-6'>
                                    <Card
                                        title={story.webTitle}
                                        description=""
                                        height={410}
                                        size="lg"
                                        bottomColor="#388E3C"
                                        backgroundImage={rndImage}
                                    />
                                </div>
                            )
                        }else{
                            return null
                        }
                    }))
                }
                <div className='sps-col sps-col-md-6 px-0 py-0'>
                    <div className='sps-row'>
                    {
                        (stories.map((story, index) => {
                            if(index >=1 && index <=4){

                                let rndImage= generateImage(arrImage);

                                let arrColor = ['#D32F2F', '#FFC107', '#2196F3', '#388E3C'];
                                var rndColor= arrColor[Math.floor(Math.random()*arrColor.length)];

                                let cardHeight = 0;
                                let src = '';
                                if(index <= 2 ){
                                    cardHeight = 250;
                                    src = rndImage
                                }else {
                                    cardHeight = null;
                                    src = ''
                                }

                                return(<div data-testid="sps-card" key={index} onClick={handleClick(story.id)} className='sps-col sps-col-md-6 sps-col-sm-6'>
                                    <Card
                                        title={story.webTitle}
                                        size="sm"
                                        height={cardHeight}
                                        bottomColor={rndColor}
                                        backgroundImage={src}
                                    />
                                </div>)
                            }else{
                                return null
                            }
                        }))
                    }
                    </div>
                </div>
            </div>
            <div className='sps-row'>
                {
                    (stories.map((story, index) => {
                        if(index > 4){
                            let rndImage= generateImage(arrImage);
                            return(<div data-testid="sps-card" key={index} onClick={handleClick(story.id)} className='sps-col sps-col-md-4 sps-col-sm-6'>
                                <Card
                                    title={story.webTitle}
                                    size="sm"
                                    description=""
                                    bottomColor="#D32F2F"
                                    height={250}
                                    backgroundImage={rndImage}
                                />
                            </div>)
                        }else{
                            return null
                        }
                    }))
                }
            </div>
            <div>{ isLoading && <Loading isOverlay={true} /> }</div>
        </>
    )
}

export default TopStories;