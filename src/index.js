export const META = Symbol('meta')

function meta(data){
  return object => {
    object[META] = data
    return object
  }
}
export const get = meta({
  description: "Get metadata from the given object",
  examples: [
    { input: {[META]: 'metadata'}, output: 'metadata'},
    { input: {[META]: {description: 'some meta description'}, normal: 'object stuff'}, output: {description: 'some meta description'} }
  ]
})(
  function getMeta(obj){
    return obj[META]
  }
)

meta.get = get

export default meta({
  description: "Add meta data to an object under the symbol exported by this module as META",
  usefulness: "attaching metadata to objects can be used in domain driven development, documentation, and testing"
})(meta)
