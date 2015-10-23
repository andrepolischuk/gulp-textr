import {PluginError} from 'gulp-util';
import {obj} from 'through2';
import textr from 'textr';

export default defaults => {
  const tf = textr(defaults);

  const plugin = obj(function (file, encoding, fn) {
    if (file.isNull()) return fn(null, file);
    if (file.isStream()) return fn(new PluginError('gulp-babel', 'Streaming not supported'));
    file.contents = new Buffer(tf(file.contents.toString()));
    this.push(file);
    fn();
  });

  plugin.use = (...fn) => {
    tf.use(...fn);
    return plugin;
  };

  return plugin;
};
