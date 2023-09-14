import { updateTimes, initializeTimes } from '../utils/times';
import { fetchAPI } from '../utils/fakeAPI';

jest.mock('../utils/fakeAPI', () => ({
	fetchAPI: jest.fn(),
}));

describe('updateTimes', () => {
	it('should update times when action type is UPDATE_TIMES and API call is successful', async () => {
		const initialState = [];
		const action = {
			type: 'UPDATE_TIMES',
			date: '2023-09-14',
		};
		const expectedResponse = ['time1', 'time2'];

		fetchAPI.mockResolvedValue(expectedResponse);

		const newState = await updateTimes(initialState, action);

		expect(fetchAPI).toHaveBeenCalledWith(new Date('2023-09-14'));
		expect(newState).toEqual(expectedResponse);
	});

	it('should not update times when action type is not UPDATE_TIMES', async () => {
		const initialState = ['time1', 'time2'];
		const action = {
			type: 'OTHER_ACTION',
		};

		const newState = await updateTimes(initialState, action);

		expect(newState).toEqual(initialState);
	});
});

describe('initializeTimes', () => {
	it('should initialize times with data from API', async () => {
		const expectedResponse = ['time1', 'time2'];

		fetchAPI.mockResolvedValue(expectedResponse);

		const initialState = await initializeTimes();

		expect(fetchAPI).toHaveBeenCalledWith(new Date());
		expect(initialState).toEqual(expectedResponse);
	});
});
