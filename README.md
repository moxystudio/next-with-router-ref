# next-with-router-ref

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/next-with-router-ref
[downloads-image]:https://img.shields.io/npm/dm/@moxy/next-with-router-ref.svg
[npm-image]:https://img.shields.io/npm/v/@moxy/next-with-router-ref.svg
[travis-url]:https://travis-ci.org/moxystudio/next-with-router-ref
[travis-image]:https://img.shields.io/travis/moxystudio/next-with-router-ref/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/next-with-router-ref
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/next-with-router-ref/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/next-with-router-ref
[david-dm-image]:https://img.shields.io/david/moxystudio/next-with-router-ref.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/next-with-router-ref?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/next-with-router-ref.svg

An alterntive to Next.js `withRouter` HOC [that supports refs](https://github.com/zeit/next.js/issues/9528) by forwarding them.


## Installation

```sh
$ npm install @moxy/next-with-router-ref
```

This library is written in modern JavaScript and is published in both CommonJS and ES module transpiled variants. If you target older browsers please make sure to transpile accordingly.


## Usage

```js
import React, { Component } from 'react';
import withRouterRef from '@moxy/next-with-router-ref';

class MyComponent extends Component {
    render() {
        const { router } = this.props;

        // ...do something with router

        return <div>Hello</div>;
    }
};

export default withRouterRef(MyComponent);
```

...and then refs work as you would expect:

```js
import React, { Component } from 'react';
import MyComponent from 'path/to/my-component';

const MyParentComponent = () => {
    const myComponentRef = useRef();

    return <MyComponent ref={ myComponentRef }>;
};

export default MyParentComponent;
```

## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```


## License

Released under the [MIT License](https://www.opensource.org/licenses/mit-license.php).
