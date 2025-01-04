import React, { Component } from 'react';
import './Carousel.css'


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.nextItem = this.nextItem.bind(this);
    this.prevItem = this.prevItem.bind(this);
  }

  nextItem() {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
    }));
  }

  prevItem() {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + this.props.images.length) % this.props.images.length,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(this.nextItem, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-md">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
        <button onClick={this.prevItem} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button onClick={this.nextItem} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    );
  }
}

export default Carousel;
