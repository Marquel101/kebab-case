import axios from "axios";
import { useState } from "react";

export const New = (params) => {
  const [category, setCategory] = useState('')
  const [opinion, setOpinion] = useState('')

  const handleSubmitPost = async (ev) => {
    ev.preventDefault();
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

    await axios.post(params.api, newOpinion);

    params.setToggleFetch(!params.toggleFetch);
  };

  return (
    <div>
      <form onSubmit={handleSubmitPost}>
        <label htmlFor="category">category: </label>
        <input type="text"
          id="category"
          onChange={(ev) => setCategory(ev.target.value)} />

        <label htmlFor="opinion">opinion:</label>
        <input type="text"
          id="opinion"
          onChange={(ev) => setOpinion(ev.target.value)} />

        <input type='submit' />
      </form>
    </div>
  )
}

export default New