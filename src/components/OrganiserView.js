import React from 'react';
import EventCreate from './EventCreate';
import EventConfirmation from './EventConfirmation';

const OrganiserView = ({createdEvent, eventData, handleChange, onSubmit, display, urlToShare}) => {
  return (
    <React.Fragment>

      {display === 'creation'
      ? <EventCreate eventData={eventData} handleChange={handleChange} onSubmit={onSubmit} />
      : null
      }

      {display === "confirmation" && createdEvent
      ? <EventConfirmation  createdEvent={createdEvent} urlToShare={urlToShare}/>
      : null
      }

    </React.Fragment>
  )
}

export default OrganiserView;
