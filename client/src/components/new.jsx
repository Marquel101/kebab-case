import axios from "axios";
import { useState } from "react";

const New = (params) => {
    
    const [category, setCategory] = useState('')
    const [opinion, setOpinion] = useState('')
    const handleSubmit = async () => {
    
        const newOpinions = {
          records: [
            {
                fields: {
                    category,
                    opinion
                }
            }
        ]
        }
    
        await axios.post(params.api, newOpinions)
        
        params.setToggleFetch(!params.toggleFetch)
        
        window.location.reload(false)
    }

    return (
        <div>
            hi
            <form onSubmit={handleSubmit}>
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" onChange={(ev) => setCategory(ev.target.value)}/>

            <label htmlFor="opinion">Opinion:</label>
            <input type="text" id="opinion" onChange={(ev) => setOpinion(ev.target.value)}/>
            <input type="submit"/>
            </form>
        </div>
    )
}
 


export default New