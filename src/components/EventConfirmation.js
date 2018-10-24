import React from "react";

const formatDate = require('date-fns/format')


function EventConfirmation({urlToShare, createdEvent}){

      return (

        <React.Fragment>

          <section className="organiserConfirm">

              <header className="confirm__header">
                  <h2 className="confirm_title">Let's meet on {formatDate(createdEvent.event.date_time, 'ddd D MMMM YYYY')}</h2>
              </header>

              <section className="confirm__suggestion">
                <h3>Your suggestion</h3>
                <h4 className="suggestion_subtitle">{createdEvent.suggestions[0].venue_name}</h4><span><h4>{createdEvent.suggestions[0].postcode}</h4></span>
                  <p className="suggestion_description">
                    {createdEvent.suggestions[0].reason}
                  </p>
                  <button className="confirm__editbtn btn">Edit</button>
                  <button className="confirm__linkbtn btn">Get Invite Link</button>
                  <p className="confirm__viewlink">{urlToShare}</p>
              </section>

          </section>

        </React.Fragment>
      )
    }

export default EventConfirmation;
