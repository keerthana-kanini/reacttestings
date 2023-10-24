import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HotelPost from './HotelPost';
describe('HotelPost Component', () => {
  it('updates state on input change', () => {
    const { getByLabelText } = render(<HotelPost />);
    const nameInput = getByLabelText('Hotel Location');
    fireEvent.change(nameInput, { target: { value: 'Chennai' } });
    expect(nameInput.value).toBe('Chennai');
  });
  it('submits form data', () => {
    const { getByLabelText, getByText } = render(<HotelPost />);
    const nameInput = getByLabelText('Hotel Name');
    const locationInput = getByLabelText('Hotel Location');
    const amenitiesInput = getByLabelText('Amenities');
    const priceInput = getByLabelText('Price');
    const submitButton = getByText('Create');
    fireEvent.change(nameInput, { target: { value: 'Vivanta' } });
    fireEvent.change(locationInput, { target: { value: 'Chennai' } });
    fireEvent.change(amenitiesInput, { target: { value: 'Parking areas' } });
    fireEvent.change(priceInput, { target: { value: '10000' } });
    fireEvent.click(submitButton);
});
});
