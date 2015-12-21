# gulp-textr [![Build Status][travis-image]][travis-url]

> Transform text with [Textr][textr]

## Install

```sh
npm install --save-dev gulp-textr
```

## Usage

```js
import gulp from 'gulp';
import ellipses from 'typographic-ellipses';
import quotes from 'typographic-quotes';
import spaces from 'typographic-single-spaces';
import textr from 'gulp-textr';

gulp.task('default', () => {
  return gulp.src('src/text.md') // Hello  "world"...
    .pipe(textr([
      spaces,
      quotes,
      ellipses
    ], {
      locale: 'en-us'
    }))
    .pipe(gulp.dest('dist')); // Hello “world”…
});
```

## API

### textr(fns[, defaults])

Create new transform stream with transform function array and default options (see `textr` [defaults][textr-defaults]).

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/gulp-textr
[travis-image]: https://travis-ci.org/andrepolischuk/gulp-textr.svg?branch=master

[textr]: https://github.com/shuvalov-anton/textr
[textr-defaults]: https://github.com/shuvalov-anton/textr#textrdefaults
