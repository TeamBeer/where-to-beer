import React from 'react';
import SuggestionList from './SuggestionList';
import SuggestionCreate from './SuggestionCreate';

const UserView = () => {
  return (
    <React.Fragment>
      <SuggestionList />
      <SuggestionCreate />
    </React.Fragment>
  )
}

export default UserView;
