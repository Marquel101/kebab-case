import TV from "./components/tv.jsx"
import Food from "./components/food.jsx"
import Music from "./components/music.jsx"
import Society from "./components/society.jsx"
import New from "./components/new.jsx"
import Travel from "./components/travel.jsx"
import { useEffect, useState } from 'react'
import { Route, Link } from "react-router-dom"
import axios from "axios"
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from "react-bootstrap"

const api = 'https://api.airtable.com/v0/app5iH8juGohHz3Rz/Table%201?api_key=key6GAvSk5bgPajgl'


function App() {
  const [toggleFetch, setToggleFetch] = useState(false)
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    console.log('Getting Opinions');
    const getOpinions= async () => {
      const resp = await axios.get(api);
      console.log(resp.data);
      setOpinions(resp.data.records);
    }
    getOpinions();
  }, [toggleFetch]);
  
  
  return (
    <div>
      <Navbar bg="myColor" variant="dark">
        <Navbar.Brand>
        Logo
        </Navbar.Brand>
      </Navbar>
      {/* <Navbar /> */}
      {/* <ul>
        <div className="links">
          <li><Link to="/">HOME</Link></li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">Categories</a>
            <div class="dropdown-content">
          <Link to="/Food">Food</Link>
          <Link to="/Music">Music</Link>
          <Link to="/Society">Society</Link>
          <Link to="/Travel">Travel</Link>
          <Link to="/TV">TV</Link> 
          </div>
          </li>
          <li><Link to="/New">New</Link></li>
        </div>
      </ul> */}
      <div className="data">
        <Route path="/Food">
          <h1>FOOD</h1>
        <Food
          boom = {opinions}
        />
       </Route>
        <Route path="/Music">
        <h1>MUSIC</h1>
        <Music
          boom = {opinions}
        />
       </Route>
        <Route path="/Society">
        <h1>SOCIETY</h1>
        <Society
          boom = {opinions}
        />
       </Route>
        <Route path="/Travel">
        <h1>TRAVEL</h1>
        <Travel
          boom = {opinions}
        />
       </Route>
        <Route path="/TV">
        <h1>TV</h1>
        <TV
          boom = {opinions}
        />
       </Route>
      <Route path='/New'>
        <New
        key = {opinions.id} 
        toggleFetch = {toggleFetch}
        setToggleFetch = {setToggleFetch}
        />
      </Route>
      </div>  
    
  </div>
  
  );
}

export default App;
