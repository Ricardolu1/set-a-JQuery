// // //找除了自己以外的兄弟姐妹
// // function getSiblings(node) {
// //   var allChildren = node.parentNode.children
// //   var array = {
// //     length: 0
// //   }
// //   for (let i = 0; i < allChildren.length; i++) {
// //     if (allChildren[i] !== node) {
// //       array[array.length] = allChildren[i]
// //       array.length += 1
// //     }
// //   }
// //   return array
// // }

// // //添加class
// // function addClass(node, classes) {
// //   for (let key in classes) {
// //     var value = classes[key]
// //     var methodName = value ? "add" : "remove"
// //     node.classList[methodName](key)
// //   }
// // }

// // addClass(item2, { a: true, k: true })

// Node.prototype.getSiblings = function() {
//   var allChildren = this.parentNode.children
//   var array = {
//     length: 0
//   }
//   for (let i = 0; i < allChildren.length; i++) {
//     if (allChildren[i] !== this) {
//       array[array.length] = allChildren[i]
//       array.length += 1
//     }
//   }
//   return array
// }

// console.log(item3.getSiblings())

// Node.prototype.addClass = function(classes) {
//   classes.forEach(value => {
//     this.classList.add(value)
//   })
// }

// item3.addClass(["a"])
// //

// var node2 = function() {
//   return {
//     addClass: function(classes) {
//       classes.forEach(value => {
//         this.classList.add(value)
//       })
//     }
//   }
// }

//  var node2= Node2()

// var div = document.getElementById('x')
// var $div=$("#x")
// console.log(div)
// console.log($div)

window.jQuery = function(selectorOrNodeId) {
  let nodes = {}
  if (typeof selectorOrNodeId === "string") {
    let temp = document.querySelectorAll(selectorOrNodeId) //伪数组
    for (let i = 0; i < temp.length; i++) {
      nodes[i] = temp[i]
      nodes.length = temp.length
    }
  } else {
    nodes = {
      0: selectorOrNodeId,
      length:1
    }
  }
  nodes.addClass = function(className) {//接受数组
    // for (let i = 0; i < nodes.length; i++) {
    //   classes.forEach(value => {
    //     nodes[i].classList.add(value)
    //   })
    for (let i = 0; i < nodes.length; i++) {
          nodes[i].classList.add(className)
    }
  }
  nodes.setText = function(text) {
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].textContent=text
    }
  }

  return nodes
}
window.$ = jQuery
var $div = $(qq)
$div.addClass('red') // 可将所有 div 的 class 添加一个 red
$div.setText("hi") // 可将所有 div 的 textContent 变为 hi
