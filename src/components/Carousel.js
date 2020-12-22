import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Control from './Control';
import LinksContainer from './LinksContainer';
import Slides from './Slides';

export default class Carousel extends Component {
  transitionTimeout;

  lastTouch = 0;

  isDragging = false;

  constructor(props) {
    super(props);
    this.state = {
      currentItemIndex: 1,
      transitionDuration: '0s',
      x: -100,
    };
  }

  isMobile = () => {
    return /Mobi/i.test(navigator.userAgent);
  };

  handleTouchStart = e => {
    const touchObject = e.changedTouches[0];
    this.lastTouch = touchObject.pageX;
  };

  handleMouseDown = e => {
    e.preventDefault();
    this.lastTouch = e.pageX;
    this.isDragging = true;
  };

  handleMouseMove = e => {
    if (this.isDragging) {
      const delta = ((this.lastTouch - e.pageX) / window.screen.availWidth) * 100;
      this.lastTouch = e.pageX;
      this.handleMovement(delta);
    }
  };

  handleMouseUp = e => {
    this.handleMovementEnd(e);
    this.lastTouch = 0;
    this.isDragging = false;
  };

  handleMouseLeave = e => {
    this.lastTouch = 0;
    this.isDragging = false;
    this.handleMovementEnd(e);
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
      const nextX = prevState.x - delta;

      return {
        x: this.checkX(nextX),
        transitionDuration: '0s',
      };
    });
  };

  checkX = nextX => {
    const {
      slides: { length },
    } = this.props;

    let x;

    if (nextX > 0) {
      x = -100 * length;
    } else if (nextX < -100 * (length + 1)) {
      x = -100;
    } else x = nextX;

    return x;
  };

  handleTouchEnd = e => {
    this.handleMovementEnd(e);
    this.lastTouch = 0;
  };

  handleMovementEnd = () => {
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

  checkIndex = nextIndex => {
    const { slides } = this.props;
    let index;
    switch (nextIndex) {
      case 0:
        index = slides.length;
        break;
      case slides.length + 1:
        index = 1;
        break;
      default:
        index = nextIndex;
    }

    return index;
  };

  changeCurrentItemIndexTo = (nextIndex, duration) => {
    const index = this.checkIndex(nextIndex);

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
    const slidesWithClones = [...slides];

    for (let index = 0; index < numberOfSlidesOnPage; index++) {
      slidesWithClones.push(slides[index]);
    }

    slidesWithClones.unshift(slides[slides.length - 1]);

    return slidesWithClones;
  };

  render() {
    const { currentItemIndex, x, transitionDuration } = this.state;
    const { slides, numberOfSlidesOnPage, numberOfSlidesOnPageMobile } = this.props;

    return (
      <>
        <div
          className="carousel"
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseLeave}
          role="slider"
          aria-valuenow="1"
          tabIndex="-1"
          aria-hidden="true"
        >
          <Slides
            slides={this.copySlides(slides, numberOfSlidesOnPage)}
            currentItemIndex={currentItemIndex}
            x={x}
            transitionDuration={transitionDuration}
            goToSlide={this.goToSlide}
            numberOfSlidesOnPage={numberOfSlidesOnPage}
            numberOfSlidesOnPageMobile={numberOfSlidesOnPageMobile}
            isMobile={this.isMobile()}
          />
        </div>
        <LinksContainer
          goToSlide={this.goToSlide}
          length={slides.length}
          currentItemIndex={currentItemIndex}
          numberOfSlidesOnPage={numberOfSlidesOnPage}
        />
        <Control handler={this.onLeftButtonClick} className="arrow left" icon="<" />
        <Control handler={this.onRightButtonClick} className="arrow right" icon=">" />
      </>
    );
  }
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  numberOfSlidesOnPage: PropTypes.number.isRequired,
  numberOfSlidesOnPageMobile: PropTypes.number.isRequired,
};
