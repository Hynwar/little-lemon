import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '../../data/validationSchema';
import { useState } from 'react';

function ReservationForm({ availableTimes, handleDateChange, submitData }) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const [inputType, setInputType] = useState('text');

	const occassionValue = watch('occassion', '');
	const dateValue = watch('date', '');
	const timeValue = watch('time', '');
	const fullNameValue = watch('fullName', '');
	const emailValue = watch('email', '');
	const phoneValue = watch('phone', '');
	const commentsValue = watch('comments', '');

	const onSubmit = (data) => {
		submitData(data);
		console.log(data);
	};

	return (
		<form className='reservation-form' onSubmit={handleSubmit(onSubmit)}>
			<div className='input-group'>
				<input
					className='input-field'
					type={inputType}
					onFocus={() => setInputType('date')}
					onChange={handleDateChange}
					{...register('date', {
						onChange: (e) => {
							handleDateChange(e.target.value);
						},
						onBlur: () => {
							setInputType('text');
						},
					})}
				/>
				<label className={`placeholder ${dateValue ? 'floating' : ''}`}>
					Select a Date
				</label>
				{errors.date && <span className='error'>{errors.date.message}</span>}
			</div>

			<div className='input-group'>
				<select className='input-field' value={timeValue} {...register('time')}>
					<option value='' hidden></option>
					{availableTimes.map((time) => (
						<option key={time} value={time}>
							{time}
						</option>
					))}
				</select>

				<label className={`placeholder ${timeValue ? 'floating' : ''}`}>
					Select a Time
				</label>
				{errors.time && <span className='error'>{errors.time.message}</span>}
			</div>

			<div className='radio-group'>
				<label className='radio-group-label'>Select Number of Guests</label>
				<div className='radio-btns'>
					<input
						className='radio'
						type='radio'
						id='num2'
						name='numGuests'
						value='2'
						{...register('numGuests')}
						defaultChecked
					/>
					<label className='radio-label' htmlFor='num2'>
						2
					</label>
					<input
						className='radio'
						type='radio'
						id='num4'
						name='numGuests'
						value='4'
						{...register('numGuests')}
					/>
					<label className='radio-label' htmlFor='num4'>
						4
					</label>
					<input
						className='radio'
						type='radio'
						id='num6'
						name='numGuests'
						value='6'
						{...register('numGuests')}
					/>
					<label className='radio-label' htmlFor='num6'>
						6
					</label>
					<input
						className='radio'
						type='radio'
						id='num8'
						name='numGuests'
						value='8'
						{...register('numGuests')}
					/>
					<label className='radio-label' htmlFor='num8'>
						8
					</label>
					<input
						className='radio'
						type='radio'
						id='num10'
						name='numGuests'
						value='10'
						{...register('numGuests')}
					/>
					<label className='radio-label' htmlFor='num10'>
						10
					</label>
					<input
						className='radio'
						type='radio'
						id='num12'
						name='numGuests'
						value='12'
						{...register('numGuests')}
					/>
					<label className='radio-label' htmlFor='num12'>
						12
					</label>
				</div>
			</div>

			<div className='input-group'>
				<select
					className='input-field'
					value={occassionValue}
					{...register('occassion')}>
					<option value='' hidden></option>
					<option value='Birthday'>Birthday</option>
					<option value='Engagement'>Engagement</option>
					<option value='Anniversary'>Anniversary</option>
				</select>

				<label className={`placeholder ${occassionValue ? 'floating' : ''}`}>
					Select an Occassion
				</label>
				{errors.occassion && (
					<span className='error'>{errors.occassion.message}</span>
				)}
			</div>

			<div className='input-group'>
				<input className='input-field' type='text' {...register('fullName')} />
				<label className={`placeholder ${fullNameValue ? 'floating' : ''}`}>
					Full Name
				</label>
				{errors.fullName && (
					<span className='error'>{errors.fullName.message}</span>
				)}
			</div>

			<div className='input-group'>
				<input className='input-field' type='email' {...register('email')} />
				<label className={`placeholder ${emailValue ? 'floating' : ''}`}>
					Email Address
				</label>
				{errors.email && <span className='error'>{errors.email.message}</span>}
			</div>

			<div className='input-group'>
				<input className='input-field' type='tel' {...register('phone')} />
				<label className={`placeholder ${phoneValue ? 'floating' : ''}`}>
					Phone Number
				</label>
				{errors.phone && <span className='error'>{errors.phone.message}</span>}
			</div>

			<div className='input-group'>
				<textarea className='input-field' {...register('comments')} />
				<label className={`placeholder ${commentsValue ? 'floating' : ''}`}>
					Additional Comments
				</label>
				{errors.comments && (
					<span className='error'>{errors.comments.message}</span>
				)}
			</div>

			<button type='submit' className='reservation-btn submit'>
				Submit
			</button>
		</form>
	);
}

export default ReservationForm;
