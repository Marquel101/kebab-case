import axios from "axios";
import { useState } from "react";

const New = ({category, setCategory, opinion, setOpinion, api}) => {
    const handleSubmit = async (ev) => {
        ev.preventDefault() 
    
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
    
        await axios.post(api, newOpinions)
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