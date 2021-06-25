import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import PropTypes from 'prop-types';
import GifsGridItems from './GifsGridItems';


const GifGrid = ({category}) => {

    const { data:images,  loading } = useFetchGifs(category);

    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                
                    {
                        images.map((img) => {
                        return <GifsGridItems 
                            key={img.id}
                            {...img}
                            />
                        })
                    }
                
            </div> 
        </>
    )
}

// GifGrid.propTypes = {

// }

export default GifGrid
