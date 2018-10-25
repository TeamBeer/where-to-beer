import React from 'react';
import SuggestionList from './SuggestionList';
import SuggestionCreate from './SuggestionCreate';
import UserRegistration from './UserRegistration';

const UserView = ({ isMember, registerUser, memberName, event, suggestions, votes, eventId }) => {
  console.log(eventId)
  return (
    <React.Fragment>
      {!isMember &&
        <UserRegistration registerUser={registerUser} />
      }
      {isMember &&
        <React.Fragment>
          <SuggestionList eventId={eventId} event={event} suggestions={suggestions} votes={votes} />
          <SuggestionCreate />
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default UserView;
