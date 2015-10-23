# gulp-textr [![Build Status][travis-image]][travis-url]

> Transform text with [Textr][textr]

## Install

```sh
npm install --save gulp-textr
```

## Usage

```js
var gulp = require('gulp');
var ellipses = require('typographic-ellipses');
var quotes = require('typographic-quotes');
var spaces = require('typographic-single-spaces');
var textr = require('gulp-textr');

var transform = textr({locale: 'en-us'})
  .use(spaces)
  .use(quotes)
  .use(ellipses)
  .use(String.prototype.trim);

gulp.task('default', function () {
  return gulp.src('src/text.md') // Hello  "world"...
    .pipe(transform)
    .pipe(gulp.dest('dist')); // Hello “world”…
});
```

## API

### textr([defaults])

Create new transform stream with default options (see `textr` [defaults][textr-defaults]).

### .use(...fn)

Register transform function.

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/gulp-textr
[travis-image]: https://travis-ci.org/andrepolischuk/gulp-textr.svg?branch=master

[textr]: https://github.com/shuvalov-anton/textr
[textr-defaults]: https://github.com/shuvalov-anton/textr#textrdefaults
