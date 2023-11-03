import { useContext } from "react";
import context from "./context/Context";
import "./PageButtons.css"


export default function PageButtons(){

    const { state, dispatch } = useContext(context);

    const HandleNext = () => {
        dispatch({
            type:'page/next',
            payload: state.page + 1
        })
    }

    const HandlePrevious = () => {
        state.page === 0 ?         
        
        dispatch({
            type: 'page/previous',
            payload: state.page - 1
        })

        :

        dispatch({
            type: 'page/previous',
            payload: state.page - 1
        })
    }

    return(
        <div className="button-container">
            <button onClick={HandlePrevious}>Previous</button>
            <button onClick={HandleNext}>Next</button>
        </div>
    )
}