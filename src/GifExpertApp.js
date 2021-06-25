import React, {useState} from 'react'
//import PropTypes from 'prop-types'
import AddCategory from './componentes/AddCategory';
import GifGrid from './componentes/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     // setCategories(
    //     //   [  'pokemon', ...categories,]
    //     // )
    //     setCategories(cat => [...categories, 'pokemon']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
           
            <ol>
                {categories.map(category => {
                        return <GifGrid
                         category={category}
                         key={category}
                         />;
                    })
                }
            </ol>

        </div>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp

