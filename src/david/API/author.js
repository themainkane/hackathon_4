import { useEffect } from "react";
import { davidKey } from "../../../keys"
import { useParams } from "react-router-dom";

export default function AuthorDetail(){

    const { id } = useParams();

    const { state, dispatch } = useContext(context);


        const  loadUser = async () => {
            const response = await fetch(`https://api.unsplash.com/users/${id}?client_id=${davidKey}`)
            const data = await response.json()

            dispatch({
                type:'userDetail/set',
                payload: data
            })
        }

        useEffect(() =>{
            loadUser()
        },[])

        // now you can use state.user to display user info
}
