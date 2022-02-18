import '../Scss/Card.scss'
const Card = ({title, description, size, height, bottomColor, backgroundImage}) =>{
    return(
        <div className='sps-card' style={{
            height: height, borderBottom: `3px solid ${bottomColor}`,
            backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}>
            <div className='sps-card-footer'>
                {
                    (()=>{
                        switch(size){
                            case 'sm':
                                return (<h3>{title}</h3>)
                            case 'lg':
                                return (<h1>{title}</h1>)
                            default:
                                return (<h2>{title}</h2>)
                        }
                    })()
                }
                { description ? <p>{description}</p> : null }
            </div>
        </div>
    )
}

export default Card