import React, { Component} from "react";
import Slider from "react-slick";

export default class TV extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
        {boom.fields.category === "music" ? <Slider {...settings}> <h5>{boom.fields.opinion}</h5></Slider> : null }
          
        </div>
      );
    }
  }