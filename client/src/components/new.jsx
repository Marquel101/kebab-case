import axios from "axios";
import { useState } from "react";

const New = ({toggleFetch, setToggleFetch}) => {

    const api = 'https://api.airtable.com/v0/app5iH8juGohHz3Rz/Table%201?api_key=key6GAvSk5bgPajgl'

    const [category, setCategory] = useState("")
    const [opinion, setOpinion] = useState("")
    
    const handleSubmit = async (ev) => {
         ev.preventDefault()

        const newOpinion = {
            records: [
              {
                fields: {
                  category,
                  opinion,
                },
              },
            ],
          };

        await axios.post(api, newOpinion )
        setToggleFetch(!toggleFetch)

        window.location.reload(false);
    }
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" value={category} onChange={(ev) => setCategory(ev.target.value)}/>

                <label htmlFor="opinion">Opinion:</label>
                <input type="text" id="opinion" value={opinion} onChange={(ev) => setOpinion(ev.target.value)}/>
                <input type="submit"/>
                </form>
            </div>
        )
    
}
 


export default New