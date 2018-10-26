import React from "react";
import '../styles/components/EventConfirmation.scss';

const formatDate = require('date-fns/format')



function EventConfirmation({urlToShare, createdEvent}){
      const urlLink = `http://${urlToShare}`

      return (

        <React.Fragment>

          <section className="organiserConfirm">

              <header className="confirm__header">
                  <h2 className="confirm__title">
                  Let's meet on 
                  <span>{formatDate(createdEvent.event.date_time, 'ddd D MMMM YYYY')}</span>
                  at <span>{formatDate(createdEvent.event.date_time, 'h.mm a')}</span></h2>
              </header>

              <section className="confirm__suggestion">
                
                <h3 className="suggestion__venue"><span>Your suggestion</span>{createdEvent.suggestions[0].venue_name}</h3>

                <h4 className="suggestion__postcode">{createdEvent.suggestions[0].postcode}</h4>

                <p className="suggestion_description">
                  {createdEvent.suggestions[0].reason}
                </p>
                  
                  <a className="suggestion__sharelink" href={urlLink} target="_blank" title="Share this link">{urlToShare}</a>

                  {/* <button className="confirm__edit btn btn">Edit your suggestion</button> */}
              </section>

          </section>

        </React.Fragment>
      )
    }

export default EventConfirmation;
