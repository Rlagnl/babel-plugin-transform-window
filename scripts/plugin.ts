//
class FileListPlugin {
	constructor(optins: any) {}
	apply(compiler: any) {
		// console.log('FileListPlugin', compiler)
		// compiler.plugin('emit', function (compilation: any, callback: any) {
		//     console.log('emit', compilation)
		//     callback()
		// })
		compiler.hooks.emit.tap('FileListPlugin', (params: any) => {
			console.log('以同步方式触及 compile 钩子', params)
		})
	}
}

export default FileListPlugin
