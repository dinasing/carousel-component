/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-a3fdf409'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "favicon.ico",
    "revision": "bf457bb2a1c8a04ab906153ec7531018"
  }, {
    "url": "fonts/Roboto-Regular.ttf",
    "revision": "11eabca2251325cfc5589c9c6fb57b46"
  }, {
    "url": "images/24086a194f7bff1c30b40fadbfd76c9f.jpg",
    "revision": null
  }, {
    "url": "images/2a4448a82981ea2aa268716eab653bd1.png",
    "revision": null
  }, {
    "url": "images/30fad43412913096e15205fe7e5f5cf6.jpg",
    "revision": null
  }, {
    "url": "images/321c7ed93670706067ee7ffcaebb934f.jpg",
    "revision": null
  }, {
    "url": "images/435f929b61a8dc71a7e21a374f85c8a9.jpg",
    "revision": null
  }, {
    "url": "images/43a149e2fa716d7c0ef46268e62ec04f.jpg",
    "revision": null
  }, {
    "url": "images/6289c6df4e83bf84f0efe8e5b6d66ec9.jpg",
    "revision": null
  }, {
    "url": "images/6b480946c8dfee263c3ac488c4d77a18.jpg",
    "revision": null
  }, {
    "url": "images/6dbafc229b1ea85e2369f9fd58b6b3aa.jpg",
    "revision": null
  }, {
    "url": "images/b9659c134d267dad4bc2c1239e74812c.jpg",
    "revision": null
  }, {
    "url": "images/d35348531ec8de4d5395174ac9722ffc.jpg",
    "revision": null
  }, {
    "url": "images/d3942cac59a1d5f553ec5ac711bfc858.jpg",
    "revision": null
  }, {
    "url": "images/dcc1b6a100d4090771b96510e9e50dfc.jpg",
    "revision": null
  }, {
    "url": "images/e112431bd6d845fd69c4494821636111.jpg",
    "revision": null
  }, {
    "url": "images/ffeacc565e50f5cfa46d2f17ae9911d3.jpg",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "5d39fb26d0b085283b976681679797cb"
  }], {});
  workbox.cleanupOutdatedCaches();

});
//# sourceMappingURL=service-worker.js.map
