//找除了自己以外的兄弟姐妹
function getSiblings(node) {
  var allChildren = node.parentNode.children
  var array = {
    length: 0
  }
  for (let i = 0; i < allChildren.length; i++) {
    if (allChildren[i] !== item3) {
      array[array.length] = allChildren[i]
      array.length += 1
    }
  }
  return array
}
//添加class

function addClass(node,classes) {
  for (let key in classes) {
    var value = classes[key]
    if (value) {
      node.classList.add(key)
    } else {
      node.classList.remove(key)
    }
  }
}

addClass(item2,{a:true,k:true})