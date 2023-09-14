import { fetchAPI } from './fakeAPI';

function updateTimes(state, action) {
	if (action.type === 'UPDATE_TIMES') {
		const res = fetchAPI(new Date(action.date));
		return res.length !== 0 ? res : state;
	}
	return state;
}

function initializeTimes() {
	return fetchAPI(new Date());
}

export { updateTimes, initializeTimes };
