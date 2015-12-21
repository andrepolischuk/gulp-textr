import {PluginError} from 'gulp-util';
import {obj} from 'through2';
import textr from 'textr';

export default (fns, defaults) => {
  const tf = textr(defaults);
  if (Array.isArray(fns)) tf.use(...fns);

  return obj(function (file, encoding, fn) {
    if (file.isNull()) return fn(null, file);
    if (file.isStream()) return fn(new PluginError('gulp-babel', 'Streaming not supported'));
    file.contents = new Buffer(tf(file.contents.toString()));
    this.push(file);
    fn();
  });
};
