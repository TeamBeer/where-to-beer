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
      target: {
        name: "memberName",
        value: "Joe"
      }
    }
    instance.handleChange(mockEvent);
    console.log(instance.state.eventData);
    expect(instance.state.eventData.memberName).toBe("Joe");
  });


});