import React from 'react'
//import PropTypes from 'prop-types'

const GifsGridItems = ({id, title, url}) => {

    return (    
        <div className="card animate__animated animate__fadeInTopLeft">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

// GifsGridItems.propTypes = {

// }

export default GifsGridItems
