'use strict'

function traverse(node, test) {
  while (node) {
    switch (node.type) {
      case 'CallExpression':
        node = node.callee
        break
      case 'MemberExpression':
        node = node.object
        if (node.property) {
          if (node.property.type === 'Identifier') {
            // e.g. $foo in this.$foo.bar(), returns true
            // or foo in $this.foo.bar(), returns false
            return test(node.property)
          }
          if (node.property.type === 'Literal') {
            // e.g. 0 in $foo[0].bar()
            // or 'prop' in $foo['prop'].bar()
            return false
          }
        }
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
//   Returns true for:
//     $('div').find('p').focus()
//     $div.find('p').focus()
//     this.$div.find('p').focus()
//
//   Returns false for:
//     div.focus()
//     $div[0].focus()
//     $div.remove.bind()
//
// Returns true if the function call node is attached to a jQuery element set.
function isjQuery(node) {
  return traverse(node, id => !!id && id.name.startsWith('$'))
}

module.exports = {
  isjQuery: isjQuery
}
