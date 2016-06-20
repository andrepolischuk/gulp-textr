/* eslint-disable consistent-return */
import textr from 'textr';
import { obj } from 'through2';
import { PluginError } from 'gulp-util';

export default function gulpTextr(plugins, defaults) {
  const transform = textr(defaults);
  if (Array.isArray(plugins)) transform.use(...plugins);

  return obj(function streamTransform(file, encoding, fn) {
    if (file.isNull()) return fn(null, file);
    if (file.isStream()) return fn(new PluginError('gulp-textr', 'Streaming not supported'));

    /* eslint-disable no-param-reassign */
    file.contents = new Buffer(transform(file.contents.toString()));
    this.push(file);
    fn();
  });
}
