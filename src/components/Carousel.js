import React, { Component } from 'react';
import LeftControl from './LeftControl';
import LinksContainer from './LinksContainer';
import RightControl from './RightControl';
import Slides from './Slides';

export default class Carousel extends Component {
  transitionTimeout;

  lastTouch = 0;

  constructor(props) {
    super(props);
    this.state = {
      currentItemIndex: props.numberOfSlidesOnPage,
      transitionDuration: '0s',
      x: -100 * props.numberOfSlidesOnPage,
    };
  }

  handleTouchStart = e => {
    const touchObject = e.changedTouches[0];
    this.lastTouch = touchObject.pageX;
  };

  handleTouchMove = e => {
    const touchObject = e.changedTouches[0];
    const delta = ((this.lastTouch - touchObject.pageX) / window.screen.availWidth) * 100;
    this.lastTouch = touchObject.pageX;
    this.handleMovement(delta);
  };

  handleMovement = delta => {
    clearTimeout(this.transitionTimeout);

    this.setState(prevState => {
      const { slides, numberOfSlidesOnPage } = this.props;
      const length = slides.length;
      const nextX = prevState.x - delta;

      return {
        x:
          nextX > 0
            ? -100 * (length + numberOfSlidesOnPage - 1)
            : nextX < -100 * (length + 1 + numberOfSlidesOnPage - 1)
            ? -100 * numberOfSlidesOnPage
            : nextX,
        transitionDuration: '0s',
      };
    });
  };

  handleTouchEnd = e => {
    this.handleMovementEnd(e);
    this.lastTouch = 0;
  };

  handleMovementEnd = e => {
    const { x, currentItemIndex } = this.state;
    const endX = -x / 100;
    const remainder = endX % 1;
    let nextItemIndex = endX - remainder;
    const deltaInteger = nextItemIndex - currentItemIndex;

    if (deltaInteger >= 0) {
      if (remainder >= 0.1) {
        nextItemIndex += 1;
        this.changeCurrentItemIndexTo(nextItemIndex, Math.min(0.5, 1 - Math.abs(remainder)));
      } else this.changeCurrentItemIndexTo(nextItemIndex, Math.max(0.5, 1 - Math.abs(remainder)));
    } else {
      nextItemIndex = currentItemIndex - Math.abs(deltaInteger);
      if (remainder > 0.9) {
        nextItemIndex += 1;
      }
      this.changeCurrentItemIndexTo(nextItemIndex, Math.max(0.5, 1 - Math.abs(remainder)));
    }
  };

  changeCurrentItemIndexTo = (index, duration) => {
    const { slides, numberOfSlidesOnPage } = this.props;
    index =
      index === 0
        ? slides.length + numberOfSlidesOnPage - 1
        : index === slides.length + 1 + numberOfSlidesOnPage - 1
        ? numberOfSlidesOnPage
        : index;

    this.setState({
      currentItemIndex: index,
      x: -index * 100,
      transitionDuration: `${duration}s`,
    });

    this.transitionTimeout = setTimeout(() => {
      this.setState({ transitionDuration: '0s' });
    }, duration * 100);
  };

  previousItem = () => {
    const { currentItemIndex } = this.state;
    this.changeCurrentItemIndexTo(currentItemIndex - 1, 0.5);
  };

  nextItem = () => {
    const { currentItemIndex } = this.state;
    this.changeCurrentItemIndexTo(currentItemIndex + 1, 0.5);
  };

  onLeftButtonClick = () => {
    this.previousItem();
  };

  onRightButtonClick = () => {
    this.nextItem();
  };

  goToSlide = index => {
    this.changeCurrentItemIndexTo(index, 0.5);
  };

  copySlides = (slides, numberOfSlidesOnPage) => {
    let slidesWithClones = [...slides];
    if (numberOfSlidesOnPage < 3) {
      slidesWithClones.unshift(slides[slides.length - 1]);
      slidesWithClones.push(slides[0]);
    } else {
      for (let index = 0; index < numberOfSlidesOnPage; index++) {
        slidesWithClones.unshift(slides[slides.length - 1 - index]);
        slidesWithClones.push(slides[index]);
      }
    }

    return slidesWithClones;
  };

  render() {
    const { currentItemIndex, x, transitionDuration } = this.state;
    const { slides, numberOfSlidesOnPage } = this.props;

    let slidesWithFirstAndLastClones = this.copySlides(slides, numberOfSlidesOnPage);

    return (
      <>
        <div
          className="carousel"
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          <Slides
            slides={slidesWithFirstAndLastClones}
            currentItemIndex={currentItemIndex}
            x={x}
            transitionDuration={transitionDuration}
            goToSlide={this.goToSlide}
            numberOfSlidesOnPage={numberOfSlidesOnPage}
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
