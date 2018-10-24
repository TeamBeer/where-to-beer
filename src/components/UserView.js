import React from 'react';
import SuggestionList from './SuggestionList';
import SuggestionCreate from './SuggestionCreate';
import UserRegistration from './UserRegistration';

const UserView = ({ isMember, registerUser, memberName }) => {
  return (
    <React.Fragment>
      {!isMember &&
        <UserRegistration registerUser={registerUser} />
      }
      {isMember &&
        <React.Fragment>
          <SuggestionList />
          <SuggestionCreate />
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default UserView;
