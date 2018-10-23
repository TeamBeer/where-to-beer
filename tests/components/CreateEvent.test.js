import React from 'react';
import { shallow } from 'enzyme';
import CreateEvent from '../../src/components/CreateEvent';

describe('CreateEvent', () => {

  let wrapper;
  let instance;
  let mockHandleChange;
  let mockOnSubmit;
  let eventData;

  beforeEach(() => {
    mockHandleChange = jest.fn();
    mockOnSubmit = jest.fn();
    mockEventData = { name: "Joe" }
    wrapper = shallow(<CreateEvent handleChange={mockHandleChange} onSubmit={mockOnSubmit} eventData={mockEventData} />);
    instance = wrapper.instance();
  });


  test('Changing name input value should call handleChange method', () => {
    const mockEvent = { target: { value: "J" } }
    wrapper.find('.setupform__name').simulate('change', mockEvent);
    expect(instance.mockHandleChange).toHaveBeenCalled();
  });

});