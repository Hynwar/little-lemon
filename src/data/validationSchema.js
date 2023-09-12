import * as Yup from 'yup';

const today = new Date();
const currentDay = today.getDay();

const openHoursWeekdays = {
	start: 8,
	end: 22, // 10 PM
};

const openHoursWeekends = {
	start: 9,
	end: 12, // 12 PM
};

export const validationSchema = Yup.object().shape({
	date: Yup.date()
		.transform((value, originalValue) => {
			if (originalValue === '') {
				return null;
			}
			return value;
		})
		.required('Date is required')
		.min(today, 'Date cannot be today or in the past'),
	time: Yup.string().required('Time is required'),
	occassion: Yup.string().required('Occassion is required'),
	fullName: Yup.string()
		.matches(/^[A-Za-z -]+$/i, 'Invalid full name format')
		.min(3, 'Full name should be at least 3 characters')
		.required('Full name is required'),
	email: Yup.string()
		.email('Invalid email format')
		.required('Email is required'),
	phone: Yup.number('Invalid phone number')
		.transform((value, originalValue) => {
			if (originalValue === '') {
				return null;
			}
			return value;
		})
		.required('Phone number is required'),
});

export default validationSchema;
