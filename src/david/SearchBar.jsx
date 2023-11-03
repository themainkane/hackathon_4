import { useContext, useEffect } from 'react'
import { davidKey } from '../../keys'
import './searchBar.css'
import context from './context/Context';
import PageButtons from './PageButtons';

export default function SearchBar(){

    const { state, dispatch } = useContext(context);

    const loadSearch = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${state.searchValue}&client_id=${davidKey}&page=${state.page}&per_page=${state.per_page}`)
        const data = await response.json()

        console.log(data)

        dispatch({
            type: 'searchData/set',
            payload: data
        })


    }

    useEffect(() => {
        loadSearch()
    }, [state.searchValue, state.page])


    const handleSearch = () => {    
        dispatch({
            type:'searchValue/set',
            payload: state.searchValue
        })
    }
    

    return(
        <div className='search-container'>
            <input type="text" placeholder="Search for an image" value={state.searchValue} onChange={ ev => dispatch({
                type: 'searchValue/set',
                payload: (ev.target.value)
            })} />
            <button onClick={ handleSearch }>Search</button>

            <PageButtons />
        </div>
    )
}