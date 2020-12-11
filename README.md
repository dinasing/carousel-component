# carousel-component
> Carousel Component built with React. [Live demo](https://dinasing.github.io/carousel-component/)

![](./carousel-demo-for-readme.png)
## Features

* Mobile finger-following swipe gestures
* Navigation
* Responsive design
* Works for any HTML content
* Supports multiple slides on the screen

## Running demo locally

```
git clone https://github.com/dinasing/carousel-component.git
cd carousel-component
npm install
npm start
```

## Example code

```javascript
import React, { Component } from 'react';
import './carousel-component/src/styles/App.css';
import Carousel from './carousel-component/src/components/Carousel';

const slides = [
  { content: <img src="src1" alt="" width="100%" height="auto" /> },
  { content: <img src="src2" alt="" width="100%" height="auto" /> },
  { content: <img src="src3" alt="" width="100%" height="auto" /> },
  { content: <img src="src4" alt="" width="100%" height="auto" /> },
  { content: <img src="src5" alt="" width="100%" height="auto" /> },
 ];

class App extends Component {
  render() {
    return (
      <>
        <Carousel slides={slides} numberOfSlidesOnPage={1} numberOfSlidesOnPageMobile={1} />
      </>
    );
  }
}

export default App;
```
