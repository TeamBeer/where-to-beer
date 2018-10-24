import React from 'react';

const EventCreate = ({handleChange, onSubmit, eventData}) => {


  const { memberName, date, time, venueName, venuePostcode, venueReason} = eventData
  return (
 <section className="organiserSetup">
          <header className="setup__header">
            <p>Organise at drink&hellip; all fields required unless stated</p>
          </header>

          <form onSubmit={e => onSubmit(e)} className="setupform">
            <div>
              <label className="setupform__namelabel" htmlFor="name">Name</label>
              <input className="setupform__name" onChange={e => handleChange(e)} type="text" name="memberName" value={memberName} placeholder="NAME" pattern="[A-Za-z]{3,}" required /><span
                className="validity"></span>
            </div>
            <div>
              <label className="setupform__datelabel" htmlFor="date">Date</label>
              <input className="setupform__date" onChange={e => handleChange(e)} type="date" name="date" value={date} placeholder="DATE" required /><span
                className="validity"></span>
            </div>
            <div>
              <label className="setupform__timelabel" htmlFor="time">Time (24hr format)</label>
              <input className="setupform__time" onChange={e => handleChange(e)} type="time" name="time" value={time} required /><span
                className="validity"></span>
            </div>
            <div>
              <label className="setupform__venuelabel" htmlFor="venue_name">Pub Name</label>
              <input className="setupform__venue" onChange={e => handleChange(e)} type="text" name="venueName" value={venueName} placeholder="PUB NAME" pattern="[A-Za-z0-9\s]{1,}" required /><span
                className="validity"></span>
            </div>
            <div>
              <label className="setupform__postcodelabel" htmlFor="postcode">Postcode</label>
              <input className="setupform__postcode" onChange={e => handleChange(e)} type="text" name="venuePostcode" value={venuePostcode} placeholder="POSTCODE" pattern="^([Gg][Ii][Rr]
    0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})$" required /><span
        className="validity"></span>
            </div>
            <div>
              <label className="ssetupform__commentlabel" htmlFor="comment">Comment</label>
              <textarea className="setupform__comment" onChange={e => handleChange(e)} name="venueReason" value={venueReason} placeholder="Comment (optional)"></textarea>
            </div>
            <div>
              <button className="btn btn__submit" type="submit">Create</button>
            </div>
          </form>
        </section>
  )

}

export default EventCreate;
