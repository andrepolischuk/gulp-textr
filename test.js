import test from 'ava';
import {File} from 'gulp-util';
import ellipses from 'typographic-ellipses';
import quotes from 'typographic-quotes';
import spaces from 'typographic-single-spaces';
import textr from './index';
let fixture;

test.beforeEach(t => {
  fixture = new File({
    path: 'fixture.txt',
    contents: new Buffer(`Hello  "world"...\n`)
  });
});

test.cb.serial('return original text', t => {
  const stream = textr();

  stream.on('data', file => {
    t.is(file.relative, 'fixture.txt');
    t.is(file.contents.toString(), `Hello  "world"...\n`);
    t.end();
  });

  stream.write(fixture);
});

test.cb.serial('return transformed text', t => {
  const stream = textr([
    spaces,
    quotes,
    ellipses,
    String.prototype.trim
  ], {
    locale: 'en-us'
  });

  stream.on('data', file => {
    t.is(file.relative, 'fixture.txt');
    t.is(file.contents.toString(), `Hello “world”…`);
    t.end();
  });

  stream.write(fixture);
});
