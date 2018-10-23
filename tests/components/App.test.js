import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('App', () => {

  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });


  test('handleChange should set eventData in state', () => {
    const mockEvent = {
      target: { value: "Joe" }
    }
    instance.handleChange(mockEvent);
    expect(instance.state.eventData.name).toBe("Joe");
  });


});