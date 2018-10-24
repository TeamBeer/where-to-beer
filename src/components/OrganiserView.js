import React from 'react';
import EventCreate from './EventCreate';
import EventConfirm from './EventConfirmation';

const OrganiserView = () => {
  return (
    <React.Fragment>
      <EventCreate eventData={this.state.eventData} handleChange={this.handleChange} onSubmit={this.onSubmit} />

      <EventConfirm />

    </React.Fragment>
  )
}

export default OrganiserView;