import '../Scss/Loading.scss';

const Loading = ({isOverlay}) => {
    let loadingOverlay;
    (isOverlay) ? loadingOverlay='loading-overlay' : loadingOverlay = ''
    return(
        <div className={`loading ${loadingOverlay}`}  >
            <div className='circle'></div>
        </div>
    )
}
export default Loading