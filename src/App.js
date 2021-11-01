import Home from "./components/Home.jsx"
import Contact from "./components/Contact.jsx"
import TV from "./components/tv.jsx"
import Food from "./components/food.jsx"
import Music from "./components/music.jsx"
import Society from "./components/society.jsx"
import New from "./components/new.jsx"
import Travel from "./components/travel.jsx"
import { useEffect, useState } from 'react'
import { Route } from "react-router-dom"
import axios from "axios"
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { RiMovieFill, RiBuilding4Line } from "react-icons/ri"
import { IoFastFoodOutline, IoMusicalNotes, IoAirplane } from "react-icons/io5"

const api = 'https://api.airtable.com/v0/app5iH8juGohHz3Rz/Table%201?api_key=key6GAvSk5bgPajgl'


function App() {
  const [toggleFetch, setToggleFetch] = useState(false)
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    const getOpinions= async () => {
      const resp = await axios.get(api);
      setOpinions(resp.data.records);
    }
    getOpinions();
  }, [toggleFetch]);
  
  
  return (
    <div>
      {/* //Navbar:
      //https://www.youtube.com/watch?v=l1MYfu5YWHc */}
      <Navbar bg="nav" variant="dark" expand="sm" collapseOnSelect>
        <Navbar.Brand>
        TOUGH TALK
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="Topics">
              <NavDropdown.Item href="/Food">Food</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/Music">Music</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/Society">Society</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/Travel">Travel</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/TV">TV</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/New">New</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
      <div>
        
      </div>
      <div className="data">
        
        <Route path="/" exact>
            <Home className="intro"/>
            <Contact />
        </Route>
        
        <Route path="/Food">
          <h1 id="food">FOOD<IoFastFoodOutline /></h1>
        <Food
          boom = {opinions}
        />
       </Route>
        <Route path="/Music">
        <h1 id="music">MUSIC <IoMusicalNotes /></h1>
        <Music
          boom = {opinions}
        />
       </Route>
        <Route path="/Society">
        <h1 id="society">SOCIETY<RiBuilding4Line /></h1>
        <Society
          boom = {opinions}
        />
       </Route>
        <Route path="/Travel">
        <h1 id="travel">TRAVEL<IoAirplane /></h1>
        <Travel
          boom = {opinions}
        />
       </Route>
        <Route path="/TV">
        <h1 id="tv">TV<RiMovieFill /></h1>
        <TV
          boom = {opinions}
        />
       </Route>
      <Route path='/New'>
        <h1 id="new"> ADD ONE FOR ME </h1>
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
