String.prototype.sanitize = function () {
  return this.replace(/  +/g, ' ').trim();
};

exports.sanitize = function (obj = {}) {
  const localObj = obj;

  const keys = Object.keys(localObj);
  for (let i = 0; i < keys.length; i += 1) {
    const element = keys[i];
    if (typeof localObj[element] === 'string') localObj[element] = localObj[element].sanitize();
  }
};
