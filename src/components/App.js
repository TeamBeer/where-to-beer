import React from "react";
import '../styles/components/app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      eventData: {
        memberName: "",
        eventName: "electric-dog",
        date: "",
        time: "19:00",
        venueName: "",
        venuePostcode: "",
        venueReason: ""},
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // TODO: change state to store an object with all event creation details
  handleChange(event){
    console.log(event.target.name, event.target.value);
    const updateTarget = [this.state.eventData[event.target.name]];
    const updateValue = event.target.value;
    this.setState({
      eventData: Object.assign({}, this.state.eventData, { [event.target.name]: updateValue })
     
    })
  }

  onSubmit(event){
    event.preventDefault();
  }
  render() {

    return (

      <main>
        <header className="app__header">
          <h1 className="app__title">Beer?</h1>
        </header>

        {/* organiser-setup */}

        <section className="organiserSetup">
          <header className="setup__header">
            <p>Organise at drink&hellip; all fields required unless stated</p>
          </header>

          <form onSubmit={this.onSubmit} className="setupform">
            <div>
              <label className="setupform__namelabel" htmlFor="name">Name</label>
              <input className="setupform__name" onChange={event => this.handleChange(event)} type="text" name="memberName" value={this.state.eventData.memberName} placeholder="NAME" pattern="[A-Za-z]{3,}" required /><span
                className="validity"></span>
            </div>
            <div>
              <label className="setupform__datelabel" htmlFor="date">Date</label>
              <input className="setupform__date" onChange={event => this.handleChange(event)} type="date" name="date" value={this.state.eventData.date} placeholder="DATE" required /><span
                className="validity"></span>
            </div>
            <div>
              <label className="setupform__timelabel" htmlFor="time">Time (24hr format)</label>
              <input className="setupform__time" onChange={event=>this.handleChange(event)} type="time" name="time" value={this.state.eventData.time} required /><span
                className="validity"></span>
            </div>
            <div>
              <label className="setupform__venuelabel" htmlFor="venue_name">Pub Name</label>
              <input className="setupform__venue" onChange={event=>this.handleChange(event)} type="text" name="venueName" value={this.state.eventData.venueName} placeholder="PUB NAME" pattern="[A-Za-z0-9\s]{1,}" required /><span
                className="validity"></span>
            </div>
            <div>
              <label className="setupform__postcodelabel" htmlFor="postcode">Postcode</label>
              <input className="setupform__postcode" onChange={event=>this.handleChange(event)} type="text" name="venuePostcode" value={this.state.eventData.venuePostcode} placeholder="POSTCODE" pattern="^([Gg][Ii][Rr]
    0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})$" required /><span
        className="validity"></span>
            </div>
            <div>
              <label className="ssetupform__commentlabel" htmlFor="comment">Comment</label>
              <textarea className="setupform__comment" onChange={event => this.handleChange(event)} name="venueReason" value={this.state.eventData.eventReason} placeholder="Comment (optional)"></textarea>
            </div>
            <div>
              <button className="btn btn__submit" type="submit">Create</button>
            </div>
          </form>
        </section>

        {/* organiser-confirmation */}

        <section className="organiserConfirm">

          <header className="confirm__header">
            <h2 className="confirm_title">Let's meet on Friday 26 October at 7pm</h2>
          </header>

          <section className="confirm__suggestion">
            <h3>Your suggestion</h3>
            <h4 className="suggestion_subtitle">The Star and Garter<span>W1F 7NX</span></h4>
            <p className="suggestion_description">
              It's got a nice  quiet room upstairs so we should get a seat
        </p>

            <button className="btn btn__edit">Edit</button>
            <button className="btn btn__submit" type="submit" value="">Get Invite Link</button>

            <p className="confirm__viewlink">http://fancyapint.com/electric-dog</p>
          </section>

        </section>
      </main>

    )

  }

}

export default App;
