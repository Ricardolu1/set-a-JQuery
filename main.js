function getSiblings(node) {
  var allChildren = node.parentNode.children
  var array = {
  length: 0
  }
  for (var i = 0; i < allChildren.length; i++) {
    if (allChildren[i]!==item3) {
      array[array.length] = allChildren[i]
      array.length += 1
    }
  }
  return array
}
