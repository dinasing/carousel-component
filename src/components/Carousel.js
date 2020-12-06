import React, { Component } from 'react';
import LeftControl from './LeftControl';
import LinksContainer from './LinksContainer';
import RightControl from './RightControl';
import Slides from './Slides';

export default class Carousel extends Component {
  state = {
    currentItemIndex: 0,
    x: 0,
  };

  changeCurrentItemIndexTo = index => {
    const { slides } = this.props;
    this.setState({
      currentItemIndex: (slides.length + index) % slides.length,
    });
  };

  previousItem = () => {
    const { currentItemIndex } = this.state;
    this.changeCurrentItemIndexTo(currentItemIndex - 1);
  };

  nextItem = () => {
    const { currentItemIndex } = this.state;
    this.changeCurrentItemIndexTo(currentItemIndex + 1);
  };

  onLeftButtonClick = () => {
    const { slides } = this.props;
    this.setState(prevState => ({
      x: prevState.x === 0 ? -100 * (slides.length - 1) : prevState.x + 100,
    }));
  };

  onRightButtonClick = () => {
    const { slides } = this.props;
    this.setState(prevState => ({
      x: prevState.x === -100 * (slides.length - 1) ? 0 : prevState.x - 100,
    }));
  };

  goToSlide = index => {
    this.setState({
      x: -100 * index,
    });
  };

  render() {
    const { currentItemIndex, x } = this.state;
    const { slides } = this.props;

    return (
      <>
        <div className="carousel">
          <Slides
            slides={slides}
            currentItemIndex={currentItemIndex}
            x={x}
            goToSlide={this.goToSlide}
          />

          <LinksContainer
            goToSlide={this.goToSlide}
            length={slides.length}
            currentItemIndex={currentItemIndex}
          />
        </div>
        <LeftControl onLeftButtonClick={this.onLeftButtonClick} />
        <RightControl onRightButtonClick={this.onRightButtonClick} />
      </>
    );
  }
}
