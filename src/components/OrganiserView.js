import React from 'react';
import EventCreate from './EventCreate';
import EventConfirm from './EventConfirmation';

const OrganiserView = ({eventData, handleChange, onSubmit}) => {
  return (
    <React.Fragment>
      <EventCreate eventData={eventData} handleChange={handleChange} onSubmit={onSubmit} />

      <EventConfirm />

    </React.Fragment>
  )
}

export default OrganiserView;
