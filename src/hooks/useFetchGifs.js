import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifts';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data:[],
        loading:true
    });
    useEffect(()=> {
        getGifs(category)
            .then(imgs => { 
                    setState({
                        data:imgs,
                        loading:false
                    })
                    
            })
     }, [category])

    // setTimeout(() => {
    //     setState(
    //         {
    //             data:[1,2,3,4,5,6],
    //             loading:false
    //         }
    //     )
    // }, 300);

    return state; //{data:[], loading:true}
}