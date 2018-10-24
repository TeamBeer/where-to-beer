import React from "react";
import EventCreate from "./EventCreate";
import '../styles/components/App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      urlToShare: "", //populated by createNewEvent when form is submitted
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

    this.createNewEvent = this.createNewEvent.bind(this)
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
    const { date, time } = this.state.eventData;
    const dateTime = `${date}T${time}:00`;
    const eventData = Object.assign({}, this.state.eventData, { dateTime })
    // clean up eventData object to fit {memberName, eventName, dateTime, venueName, venuePostcode, venueReason} shape
    delete eventData.date;
    delete eventData.time;
    // pass eventData object to createNewEvent on database function
    // createNewEvent(eventData);
  }




  // On page load, initial user/group starter will fill out form, and on form submit, will run the following function to post to database
  createNewEvent(eventData) {
    fetch('/api/event', {
      method: 'post',
      body: JSON.stringify(json.stringify(eventData)),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(body => {
        const shareUrl = `localhost:8080/event/${body.id}`
        this.setState({
          shareURL
        })
      })
  }

  render() {
    return (
      <main>
        <Router>
          <Header />
          <Route path="/" exact render={() => {
            <OrganiserView />
          }}
          />

          <Route path="/event/:eventId" render={() => {
            <UserView />
          }}
          />
          <Footer />
        </Router>
      </main>
    )
  }
}

export default App;
