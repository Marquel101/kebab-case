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
          //refresh page
          //https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react
        window.location.reload(false);
    }
    
        return (
            <div>
                <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" value={category} onChange={(ev) => setCategory(ev.target.value)}/>
                <br />
                <label htmlFor="opinion">Opinion:</label>
                <input type="text" id="opinion" value={opinion} onChange={(ev) => setOpinion(ev.target.value)}/>
                <input type="submit"/>
                </form>
                
                <div className="fyi">
                <p>*CATEGORIES TO CHOOSE FROM:</p>
                  <li>food</li>
                  <li>tv</li>
                  <li>society</li>
                  <li>music</li>
                  <li>travel</li>
                </div>
            </div>
        )
    
}
 


export default New