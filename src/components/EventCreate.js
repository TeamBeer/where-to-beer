import React from 'react';

class EventCreate extends React.Component{
  constructor(){
    super()

    this.state = {
      eventData: {
        memberName: "",
        date: "",
        time: "",
        venueName: "",
        venuePostcode: "",
        venueReason: ""
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleChange(event){
    event.preventDefault()
    const newEvent = Object.assign({}, this.state.eventData)
    newEvent[event.target.name] = event.target.value
    this.setState({
      eventData: newEvent
    })

  }

  handleSubmit(){
    event.preventDefault()
  }

  render(){

    return (

      <section className="organiserSetup">
               <header className="setup__header">
                 <p>Organise at drink&hellip; all fields required unless stated</p>
               </header>

               <form onSubmit={e => onSubmit(e)} className="setupform">
                 <div>
                   <label className="setupform__namelabel" htmlFor="name">Name</label>
                   <input className="setupform__name" onChange={this.handleChange} type="text" name="memberName" value={this.state.eventData.memberName} placeholder="NAME" pattern="[A-Za-z]{3,}" required /><span
                     className="validity"></span>
                 </div>
                 <div>
                   <label className="setupform__datelabel" htmlFor="date">Date</label>
                   <input className="setupform__date" onChange={this.handleChange} type="date" name="date" value={this.state.eventData.date} placeholder="DATE" required /><span
                     className="validity"></span>
                 </div>
                 <div>
                   <label className="setupform__timelabel" htmlFor="time">Time (24hr format)</label>
                   <input className="setupform__time" onChange={this.handleChange} type="time" name="time" value={this.state.eventData.time} required /><span
                     className="validity"></span>
                 </div>
                 <div>
                   <label className="setupform__venuelabel" htmlFor="venue_name">Pub Name</label>
                   <input className="setupform__venue" onChange={this.handleChange} type="text" name="venueName" value={this.state.eventData.venueName} placeholder="PUB NAME" pattern="[A-Za-z0-9\s]{1,}" required /><span
                     className="validity"></span>
                 </div>
                 <div>
                   <label className="setupform__postcodelabel" htmlFor="postcode">Postcode</label>
                   <input className="setupform__postcode" onChange={this.handleChange} type="text" name="venuePostcode" value={this.state.eventData.venuePostcode} placeholder="POSTCODE" pattern="^([Gg][Ii][Rr]
         0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})$" required /><span
             className="validity"></span>
                 </div>
                 <div>
                   <label className="ssetupform__commentlabel" htmlFor="comment">Comment</label>
                   <textarea className="setupform__comment" onChange={this.handleChange} name="venueReason" value={this.state.eventData.venueReason} placeholder="Comment (optional)"></textarea>
                 </div>
                 <div>
                   <button className="btn btn__submit" type="submit">Create</button>
                 </div>
               </form>
             </section>



    )
  }
}

// const EventCreate = ({handleChange, onSubmit, eventData}) => {
//
//
//   const { memberName, date, time, venueName, venuePostcode, venueReason} = eventData




export default EventCreate;
