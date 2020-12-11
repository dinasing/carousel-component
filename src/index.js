import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/carousel-component/service-worker.js')
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
