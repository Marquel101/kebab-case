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
import ImageSlider from "./components/Slider.js"
import { SliderData } from './components/SliderData.js'


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
      <div className="links">
      <Link to="/">HOME</Link>
      <Link to="/Food">Food</Link>
      <Link to="/Music">Music</Link>
      <Link to="/Society">Society</Link>
      <Link to="/Travel">Travel</Link>
      <Link to="/TV">TV</Link> 
      <Link to="/New">New</Link>
      </div>
      <ImageSlider 
      slides = {SliderData}
      />
    
      <div className="data">

      {opinions.map((opinions) => (
        <Route path="/Food">
        <Food
          boom={opinions}
        />
       </Route>
      ))}
    
      {opinions.map((opinions) => (
        <Route path="/Music">
        <Music
          boom = {opinions}
        />
       </Route>
      ))} 

      {opinions.map((opinions) => (
        <Route path="/Society">
        <Society
          boom = {opinions}
        />
       </Route>
      ))} 

      {opinions.map((opinions) => (
        <Route path="/Travel">
        <Travel
          boom = {opinions}
        />
       </Route>
      ))} 

      {opinions.map((opinions) => (
        <Route path="/TV">
        <TV
          boom = {opinions}
        />
       </Route>
      ))} 

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
