import test from 'ava';
import {File} from 'gulp-util';
import ellipses from 'typographic-ellipses';
import quotes from 'typographic-quotes';
import spaces from 'typographic-single-spaces';
import textr from './index';

const fixture = new File({
  path: 'fixture.txt',
  contents: new Buffer(`Hello  "world"...\n`)
});

test('should return original text', async t => {
  const stream = textr();

  stream.on('data', file => {
    t.is(file.relative, 'fixture.txt');
    t.is(file.contents.toString(), `Hello  "world"...\n`);
  });

  stream.write(fixture);
});

test('should return transformed text', async t => {
  const stream = textr({locale: 'en-us'})
    .use(spaces)
    .use(quotes)
    .use(ellipses)
    .use(String.prototype.trim);

  stream.on('data', file => {
    t.is(file.relative, 'fixture.txt');
    t.is(file.contents.toString(), `Hello “world”…`);
  });

  stream.write(fixture);
});
