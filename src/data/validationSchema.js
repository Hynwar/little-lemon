import * as Yup from 'yup';

const today = new Date();

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
		.required('Full name is required')
		.matches(/^[A-Za-z -]+$/i, 'Invalid full name format')
		.min(3, 'Full name should be at least 3 characters'),
	email: Yup.string()
		.required('Email is required')
		.email('Invalid email format'),
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
