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

  startX = 0;
  startY = 0;
  startTime = 0;

  handleTouchStart = e => {
    const touchObject = e.changedTouches[0];
    this.startX = touchObject.pageX;
    this.startY = touchObject.pageY;
    this.startTime = new Date().getTime();
  };

  handleTouchEnd = e => {
    const minDistance = 150;
    const maxYDistance = 100;
    const maxAllowedTime = 300;

    const touchObject = e.changedTouches[0];
    const distanceX = touchObject.pageX - this.startX;
    const distanceY = touchObject.pageY - this.startY;
    const elapsedTime = new Date().getTime() - this.startTime;
    if (elapsedTime <= maxAllowedTime) {
      if (Math.abs(distanceX) >= minDistance && Math.abs(distanceY) <= maxYDistance) {
        if (distanceX > 0) {
          this.previousItem();
        } else {
          this.nextItem();
        }
      }
    }
  };

  changeCurrentItemIndexTo = index => {
    const { slides } = this.props;
    this.setState({
      currentItemIndex: (slides.length + index) % slides.length,
    });
  };

  previousItem = () => {
    const { slides } = this.props;
    this.setState(prevState => ({
      x: prevState.x === 0 ? -100 * (slides.length - 1) : prevState.x + 100,
    }));
  };

  nextItem = () => {
    const { slides } = this.props;
    this.setState(prevState => ({
      x: prevState.x === -100 * (slides.length - 1) ? 0 : prevState.x - 100,
    }));
  };

  onLeftButtonClick = () => {
    this.previousItem();
  };

  onRightButtonClick = () => {
    this.nextItem();
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
        <div
          className="carousel"
          onTouchStart={this.handleTouchStart}
          onTouchEnd={this.handleTouchEnd}
        >
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
