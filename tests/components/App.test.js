import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

global.fetch = require('jest-fetch-mock');
global.localStorage = require('jest-localstorage-mock');

describe('App', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
    fetch.resetMocks();
    localStorage.clear();
  });

  describe('On first load', () => {

    test('Initial state eventData should only contain a default time', () => {
      expect(instance.state.eventData).toEqual({
        memberName: "",
        date: "",
        time: "19:00",
        venueName: "",
        venuePostcode: "",
        venueReason: ""
      })
    });

    test('If user ID exists in localStorage, user should be identified from database', () => {
      localStorage.setItem('memberId', 23);
      const memberData = { name: "Joe", id: 23 }
      fetch.mockResponse(JSON.stringify({ memberDetails: { memberData } }));
      instance.initialFetch().then(() => {
        expect(instance.state).toMatchObject({ isMember: true, memberId: 23, memberName: "Joe" });
      })
    })
  })

  describe('User interaction', () => {
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

    // TODO: onSubmit

    // TODO: uniqueEventName

    // TODO: createNewEvent

    // TODO: registerUser



  })

})