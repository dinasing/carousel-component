import React, { Component } from 'react';
import LeftControl from './LeftControl';
import LinksContainer from './LinksContainer';
import RightControl from './RightControl';
import Slides from './Slides';

export default class Carousel extends Component {
  state = {
    currentItemIndex: 0,
    isEnabled: true,
  };

  changeCurrentItemIndexTo = index => {
    const { slides } = this.props;
    this.setState({
      currentItemIndex: (slides.length + index) % slides.length,
    });
  };

  hideItem = () => {
    this.setState(() => ({
      isEnabled: false,
    }));
  };

  showItem = () => {
    this.setState({
      isEnabled: true,
    });
  };

  previousItem = () => {
    const { currentItemIndex } = this.state;

    this.hideItem();
    this.changeCurrentItemIndexTo(currentItemIndex - 1);
    this.showItem();
  };

  nextItem = () => {
    const { currentItemIndex } = this.state;

    this.hideItem();
    this.changeCurrentItemIndexTo(currentItemIndex + 1);
    this.showItem();
  };

  onLeftButtonClick = () => {
    const { isEnabled } = this.state;
    if (isEnabled) {
      this.previousItem();
    }
  };

  onRightButtonClick = () => {
    const { isEnabled } = this.state;
    if (isEnabled) {
      this.nextItem();
    }
  };

  goToSlide = index => {
    this.changeCurrentItemIndexTo(index);
  };

  render() {
    const { currentItemIndex } = this.state;
    const { slides } = this.props;

    return (
      <>
        <div className="carousel">
          <Slides slides={slides} currentItemIndex={currentItemIndex} />
        </div>
        <LinksContainer
          goToSlide={this.goToSlide}
          length={slides.length}
          currentItemIndex={currentItemIndex}
        />
        <LeftControl onLeftButtonClick={this.onLeftButtonClick} />
        <RightControl onRightButtonClick={this.onRightButtonClick} />
      </>
    );
  }
}
