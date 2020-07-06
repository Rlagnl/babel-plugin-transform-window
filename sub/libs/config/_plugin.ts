class TestPlugin {
	private definitions: any
	constructor(definitions: any) {
		this.definitions = definitions
	}

	apply(compiler: any) {
		console.log('TestPlugin', this.definitions)
	}
}

export default TestPlugin
