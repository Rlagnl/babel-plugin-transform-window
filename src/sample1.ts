const esprima = require('esprima')
const estraverse = require('estraverse')
const escodegen = require('escodegen')
// const code = `function getUser() {}`
// const code = `funcrion getUser() { window.location = ''; aaa = 1; var b = 2 }`
const code = `
  var window = {}; 
  window.location; 
  ccc.window; 
  aaa.bbb.window; 
  var ddd = window.aaa
`

// 生成 AST
const ast = esprima.parseScript(code)
// 转换 AST，只会遍历 type 属性
// traverse 方法中有进入和离开两个钩子函数
estraverse.traverse(ast, {
  enter(node: any) {
    if (node.type === 'MemberExpression') {
      const object = node.object
      if (object.type === 'Identifier' && object.name === 'window') {
        object.name = '$window'
      }
    }
    if (node.type === 'VariableDeclarator') {
      const id = node.id
      if (id.type === 'Identifier' && id.name === 'window') {
        id.name = '$window'
      }
    }
  }
})
// 生成新的代码
const result = escodegen.generate(ast)
console.warn(result)
export {}
