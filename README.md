# Object Metadata
### simple metadata setting and getting for javascript inspired by [clojure/meta](https://clojuredocs.org/clojure.core/meta)

## Overview
* Exports `{ default: meta, get, META }`  
* `meta` has the signature `meta(data) => obj => obj`. This writes the given data to `obj[META]`
* metadata can be retrieved by `get(obj) => data`, `meta.get(obj) => data`, or `obj[META] => data`

## Usage
```javascript
import meta from 'object-metadata'

const arrayify = meta({
  description: `wraps defined non-array elements in an array,
                always returns an array.`,
  examples: [
    {input: ['foo'], output: ['foo']},
    {input: 'foo', output: ['foo']},
    {input: undefined, output: []}
  ]
})(
  function arrayify(val){
    return Array.isArray(val) ? val : (val !== undefined ? [val] : [])
  }
)

Object.keys(meta.get(arrayify))

//=> ['description', 'examples']

meta.get(meta)
/* =>
  {
    description: "Add meta data to an object under the symbol exported by this module as META",
    usefulness: "attaching metadata to objects can be used in domain driven development, documentation, and testing"
  }
*/
```

Note: metadata can not be set on primitive types.
