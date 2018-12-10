import React, { Component } from "react";
import ReactDOM from "react-dom";
import SlideImage from './SlideImage.js'
import {Carousel} from 'react-bootstrap'

class ProjectImageCarousel extends Component {

  constructor(props, context) {
      super(props, context);

      this.handleSelect = this.handleSelect.bind(this);

      this.state = {
        activeIndex: 0,
        direction: null
      };
    }

    handleSelect(selectedIndex, e) {
      this.setState({
        activeIndex: selectedIndex,
        direction: e.direction
      });
    }

  render() {
    const { activeIndex, direction } = this.state;

    if(this.props.images) {
      const thumbnails = this.props.images.map((image, index) => {
        return <SlideImage image={image} key={index} id={index} activeIndex={activeIndex} />
      })

      return (
       <div id="carousel">
        <Carousel activeIndex={activeIndex} direction={direction} onSelect={this.handleSelect}>
          {thumbnails}
        </Carousel>
       </div>
        )
    } else {
      return (
        <div className="project-image-carousel-container">
        </div>
        )
    }

    
  }
}

export default ProjectImageCarousel