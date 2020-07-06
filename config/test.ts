import './_window'
import { object2string } from './utils'

const handler = {
	get: function (obj: any, prop: any) {
		console.log('get', obj, prop, _window)
		if (prop === 'innerWidth') {
			return 100
		}
		return _window[prop]
	}
}

const object = 'new Proxy({}, ' + object2string(handler) + ')'
console.log('=== handler ===', object)

export default object
