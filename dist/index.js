'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var META = exports.META = Symbol('meta');

function meta(data) {
  return function (object) {
    object[META] = data;
    return object;
  };
}
var get = exports.get = meta({
  description: "Get metadata from the given object",
  examples: [{ input: _defineProperty({}, META, 'metadata'), output: 'metadata' }, { input: (_input2 = {}, _defineProperty(_input2, META, { description: 'some meta description' }), _defineProperty(_input2, 'normal', 'object stuff'), _input2), output: { description: 'some meta description' } }]
})(function getMeta(obj) {
  return obj[META];
});

meta.get = get;

exports.default = meta({
  description: "Add meta data to an object under the symbol exported by this module as META",
  usefulness: "attaching metadata to objects can be used in domain driven development, documentation, and testing"
})(meta);