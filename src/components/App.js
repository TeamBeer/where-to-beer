import React from "react";
import CreateEvent from "./CreateEvent";
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
        eventReason: ""
      },
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      eventData: Object.assign(
        {},
        this.state.eventData,
        { [event.target.name]: event.target.value })
    });
  }

  onSubmit(event) {
    event.preventDefault();
    //  concatenate the date and time in the eventTime object iso 8601 date format
    // { memberName, eventName, dateTime, venueName, venuePostcode, venueReason } = req.body
    // pass the object to the submit to database function
  }


  render() {

    return (

      <main>
        <header className="app__header">
          <h1 className="app__title">Beer?</h1>
        </header>

        <CreateEvent eventData={this.state.eventData} handleChange={this.handleChange} onSubmit={this.onSubmit} />

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
