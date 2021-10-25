import TV from "./components/tv.jsx"
import Food from "./components/food.jsx"
import Music from "./components/music.jsx"
import Society from "./components/society.jsx"
import New from "./components/new.jsx"
import Travel from "./components/travel.jsx"
import Complaint from "./components/complaint.jsx"
import { useEffect, useState } from 'react'
import { Route, Link } from "react-router-dom"
import axios from "axios"
import './App.css'


const api = 'https://api.airtable.com/v0/app5iH8juGohHz3Rz/Table%201?api_key=key6GAvSk5bgPajgl'


function App() {
const [opinions, setOpinions] = useState([]);
  useEffect(() => {
    console.log('Getting Opinions');
    const getOpinions= async () => {
      const resp = await axios.get(api);
      console.log(resp.data);
      setOpinions(resp.data.records);
    }
    getOpinions();
  }, []);

  return (
    <div>
      {opinions.map((opinions) => (
        <Route path="/Food">
        <Food
        key={opinions.id}
        test={opinions}
        />
        </Route>
      ))}
      
      

      <Link to="/">HOME</Link>
      <Link to="/Food">Food</Link>
      <Link to="/Music">Music</Link>
      <Link to="/Travel">Travel</Link>
      <Link to="/TV">TV</Link>
      <Link to="/Society">Society</Link>
      <Link to="/New">New</Link>
  </div>
    
  );
}

export default App;
