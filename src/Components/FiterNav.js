
const FilterNav = () => {

    return(
        <div className='sps-row'>
            <div className='sps-col sps-col-md-6'>
                <h1>Top stories</h1>
            </div>
            <div className='sps-col sps-col-md-6' style={{justifyContent: 'right', alignItems: 'center', display: 'flex'}}>
                <button className='sps-btn sps-btn-primary mr-5'>
                  VIEW BOOKMARK
                </button>
                <select className='sps-input'>
                  <option>Newest First</option>
                  <option>Oldest First</option>
                </select>
            </div>
        </div>
    )

}

export default FilterNav;