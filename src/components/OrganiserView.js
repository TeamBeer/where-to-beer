import React from 'react';
import EventCreate from './EventCreate';
import EventConfirmation from './EventConfirmation';

const OrganiserView = ({eventData, handleChange, onSubmit, display}) => {
  return (
    <React.Fragment>

      {display === 'creation'
      ? <EventCreate eventData={eventData} handleChange={handleChange} onSubmit={onSubmit} />
      : null
      }

      {display === "confirmation"
      ? <EventConfirmation  />
      : null
      }

    </React.Fragment>
  )
}

export default OrganiserView;
