const babel = require('@babel/core')
const t = require('@babel/types')
const code = `const fn = (a, b) => a + b`
const arrowFnPlugin = {
  // 访问者模式
  visitor: {
    // 当访问到某个路径的时候进行匹配
    ArrowFunctionExpression(path: any) {
      // 拿到节点
      const node = path.node
      console.log('ArrowFunctionExpression -> node', node)
    },
  },
}
// babel 有 transform 方法会帮我们自动遍历，使用相应的预设或者插件转换相应的代码
const r = babel.transform(code, {
  plugins: [arrowFnPlugin],
})
console.warn('case: ', r.code)

export {}
