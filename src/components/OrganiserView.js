import React from 'react';
import EventCreate from './EventCreate';
import EventConfirmation from './EventConfirmation';

const OrganiserView = ({uniqueEventName, createdEvent, eventData, handleChange, onSubmit, display, urlToShare, createNewEvent}) => {
  return (
    <React.Fragment>

      {display === 'creation'
      ? <EventCreate eventData={eventData} createNewEvent={createNewEvent} uniqueEventName={uniqueEventName}/>
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
