import React, { Component } from 'react';
import LeftControl from './LeftControl';
import RightControl from './RightControl';
import Slides from './Slides';

export default class Carousel extends Component {
  state = {
    currentItemIndex: 0,
  };

  changeCurrentItemIndexTo(index) {
    this.setState((prevState, props) => ({
      currentItemIndex: (prevState.currentItemIndex + index) % props.slides.length,
    }));
  }

  render() {
    const { currentItemIndex } = this.state;
    const { slides } = this.props;

    return (
      <>
        <div className="carousel">
          <Slides slides={slides} currentItemIndex={currentItemIndex} />
        </div>
        <LeftControl />
        <RightControl />
      </>
    );
  }
}
