//找除了自己以外的兄弟姐妹
function getSiblings(node) {
  var allChildren = node.parentNode.children
  var array = {
    length: 0
  }
  for (let i = 0; i < allChildren.length; i++) {
    if (allChildren[i] !== node) {
      array[array.length] = allChildren[i]
      array.length += 1
    }
  }
  return array
}

//添加class
function addClass(node, classes) {
  for (let key in classes) {
    var value = classes[key]
    var methodName = value ? "add" : "remove"
    node.classList[methodName](key)
  }
}

// addClass(item2, { a: true, k: true })

Node.prototype.getSiblings=function () {
  var allChildren = this.parentNode.children
  var array = {
    length: 0
  }
  for (let i = 0; i < allChildren.length; i++) {
    if (allChildren[i] !== this) {
      array[array.length] = allChildren[i]
      array.length += 1
    }
  }
  return array
}

console.log(item3.getSiblings()) 