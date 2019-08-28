import { alertConstants } from '../src/lib/constants'

// export const alertActions = {
// 	success,
// 	error,
// 	clear
// }

export function alertSuccess(message) {
	return { type: alertConstants.SUCCESS, message }
}

export function alertError(message) {
	return { type: alertConstants.ERROR, message }
}

export function alertInfo(message) {
	return { type: alertConstants.INFO, message }
}

export function alertClear() {
	return { type: alertConstants.CLEAR }
}
