import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

global.fetch = require('jest-fetch-mock');
global.localStorage = require('jest-localstorage-mock');

describe('App', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    localStorage.clear();
    fetch.resetMocks();
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });

  describe('On first load', () => {

    test('Initial state eventData should only contain a default time', () => {
      expect(instance.state).toEqual({
        createdEvent: {},
        urlToShare: "", //populated by createNewEvent when form is submitted
        isMember: false, // controlled by registerUser when name submitted
        memberId: 0,
        event: {},
        suggestions: {},
        votes: {},
        display: "creation" //'creation' or 'confirmation' or 'userView'
      })
    });

    test('If user ID exists in localStorage, user should be identified from database', () => {
      localStorage.setItem('memberId', JSON.stringify({ memberId: 23 }));
      const memberData = { name: "Joe", id: 23 }
      fetch.mockResponse(JSON.stringify(memberData));
      return instance.initialFetch().then(() => {
        expect(fetch).toHaveBeenCalledWith('/api/member/23')
        expect(wrapper.state()).toMatchObject({ isMember: true, memberId: 23, memberName: "Joe" });
      })
    })
  })

  // TODO: onSubmit

  // TODO: uniqueEventName

  // TODO: createNewEvent

  // TODO: registerUser



})

