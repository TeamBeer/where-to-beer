import React from 'react';
import { shallow } from 'enzyme';
import EventCreate from '../../src/components/EventCreate';

describe('EventCreate', () => {

  let wrapper;
  let mockHandleChange;
  let mockOnSubmit;
  let mockEventData;

  beforeEach(() => {
    mockHandleChange = jest.fn();
    mockOnSubmit = jest.fn();
    mockEventData = { memberName: "Joe" }
    wrapper = shallow(<EventCreate handleChange={mockHandleChange} onSubmit={mockOnSubmit} eventData={mockEventData} />);
  });


  test('Changing name input value should call handleChange method', () => {
    const mockEvent = { target: { name: "memberName", value: "J" } }
    wrapper.find('.setupform__name').simulate('change', mockEvent);
    expect(mockHandleChange).toHaveBeenCalledWith(mockEvent);
  });

  test('Changing date input value should call handleChange method', () => {
    const mockEvent = { target: { name: "date", value: "2018-10-26" } }
    wrapper.find('.setupform__date').simulate('change', mockEvent);
    expect(mockHandleChange).toHaveBeenCalledWith(mockEvent);
  });

  test('Changing time input value should call handleChange method', () => {
    const mockEvent = { target: { name: "time", value: "20:26" } }
    wrapper.find('.setupform__date').simulate('change', mockEvent);
    expect(mockHandleChange).toHaveBeenCalledWith(mockEvent);
  });

  test('Changing pub name input value should call handleChange method', () => {
    const mockEvent = { target: { name: "venueName", value: "The C" } }
    wrapper.find('.setupform__venue').simulate('change', mockEvent);
    expect(mockHandleChange).toHaveBeenCalledWith(mockEvent);
  });

  test('Changing postcode input value should call handleChange method', () => {
    const mockEvent = { target: { name: "venuePostcode", value: "SE19" } }
    wrapper.find('.setupform__postcode').simulate('change', mockEvent);
    expect(mockHandleChange).toHaveBeenCalledWith(mockEvent);
  });

  test('Form submit should call onSubmit method', () => {
    wrapper.find('.setupform').simulate('submit');
    expect(mockOnSubmit).toHaveBeenCalled();
  });

});