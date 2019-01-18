'use strict'

function traverse(node, test) {
  while (node) {
    switch (node.type) {
      case 'CallExpression':
        node = node.callee
        break
      case 'MemberExpression':
        node = node.object
        if (test(node.property)) return true
        break
      case 'Identifier':
        return test(node)
      default:
        return false
    }
  }
}

// Traverses from a node up to its root parent to determine if it
// originated from a jQuery `$()` function.
//
// node - The CallExpression node to start the traversal.
//
// Examples
//
//   // $('div').find('p').first()
//   // $div.find('p').first()
//   // this.$div.find('p').first()
//   isjQuery(firstNode) // => true
//
// Returns true if the function call node is attached to a jQuery element set.
function isjQuery(node) {
  return traverse(node, id => !!id && id.name.startsWith('$'))
}

module.exports = {
  traverse: traverse,
  isjQuery: isjQuery
}
