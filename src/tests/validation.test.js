import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import ReservationForm from '../components/reservation/ReservationForm';

describe('ReservationForm', () => {
	it('should display a validation error for an empty date field', async () => {
		render(
			<ReservationForm
				availableTimes={[]}
				handleDateChange={() => {}}
				submitData={() => {}}
			/>
		);
		const submitButton = screen.getByText('Submit');

		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(screen.getByText('Date is required')).toBeInTheDocument();
		});
	});

	it('should display a validation error for an empty time field', async () => {
		render(
			<ReservationForm
				availableTimes={[]}
				handleDateChange={() => {}}
				submitData={() => {}}
			/>
		);
		const submitButton = screen.getByText('Submit');

		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(screen.getByText('Time is required')).toBeInTheDocument();
		});
	});

	it('should display a validation error for an empty occasion field', async () => {
		render(
			<ReservationForm
				availableTimes={[]}
				handleDateChange={() => {}}
				submitData={() => {}}
			/>
		);
		const submitButton = screen.getByText('Submit');

		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(screen.getByText('Occassion is required')).toBeInTheDocument();
		});
	});

	it('should display a validation error for an empty full name field', async () => {
		render(
			<ReservationForm
				availableTimes={[]}
				handleDateChange={() => {}}
				submitData={() => {}}
			/>
		);
		const submitButton = screen.getByText('Submit');

		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(screen.getByText('Full name is required')).toBeInTheDocument();
		});
	});

	it('should display a validation error for an empty email field', async () => {
		render(
			<ReservationForm
				availableTimes={[]}
				handleDateChange={() => {}}
				submitData={() => {}}
			/>
		);
		const submitButton = screen.getByText('Submit');

		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(screen.getByText('Email is required')).toBeInTheDocument();
		});
	});

	it('should display a validation error for an empty phone number field', async () => {
		render(
			<ReservationForm
				availableTimes={[]}
				handleDateChange={() => {}}
				submitData={() => {}}
			/>
		);
		const submitButton = screen.getByText('Submit');

		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(screen.getByText('Phone number is required')).toBeInTheDocument();
		});
	});

	it('should display a validation error for an invalid full name', async () => {
		render(
			<ReservationForm
				availableTimes={[]}
				handleDateChange={() => {}}
				submitData={() => {}}
			/>
		);
		const submitButton = screen.getByText('Submit');
		const fullNameInput = screen.getByLabelText('Full Name');

		fireEvent.change(fullNameInput, { target: { value: '123' } });
		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(screen.getByText('Invalid full name format')).toBeInTheDocument();
		});
	});

	it('should display a validation error for a short full name', async () => {
		render(
			<ReservationForm
				availableTimes={[]}
				handleDateChange={() => {}}
				submitData={() => {}}
			/>
		);
		const submitButton = screen.getByText('Submit');
		const fullNameInput = screen.getByLabelText('Full Name');

		fireEvent.change(fullNameInput, { target: { value: 'A' } });
		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(
				screen.getByText('Full name should be at least 3 characters')
			).toBeInTheDocument();
		});
	});
});
