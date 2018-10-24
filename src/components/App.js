import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import '../styles/base/base.scss';
import OrganiserView from "./OrganiserView"
import UserView from "./UserView"


const shortid = require('shortid')


import '../styles/components/App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      urlToShare: "", //populated by createNewEvent when form is submitted

      eventData: {
        memberName: "",
        date: "",
        time: "19:00",
        venueName: "",
        venuePostcode: "",
        eventReason: ""
      },

      display: "creation" //'creation' or 'confirmation' or 'userView'
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
    const eventName = shortid.generate()
    //  concatenate the date and time in the eventTime object iso 8601 date format
    const { date, time } = this.state.eventData;
    const dateTime = `${date}T${time}:00`;
    const eventData = Object.assign({}, this.state.eventData, { dateTime })
    eventData.eventName = eventName
    // clean up eventData object to fit {memberName, eventName, dateTime, venueName, venuePostcode, venueReason} shape
    delete eventData.date;
    delete eventData.time;
    // pass eventData object to createNewEvent on database function
    console.log(eventData)
    this.createNewEvent(eventData);
    this.setState({
      display: 'confirmation',
      eventData: {
        memberName: "",
        date: "",
        time: "19:00",
        venueName: "",
        venuePostcode: "",
        eventReason: ""
      }
    })
  }




  // On page load, initial user/group starter will fill out form, and on form submit, will run the following function to post to database
  createNewEvent(eventData) {
    console.log("fetch")
    fetch('/api/event', {
      method: 'post',
      body: JSON.stringify(eventData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(body => {
        console.log(body)
        const urlToShare = `localhost:8080/event/${body.event.name}`
        this.setState({
          urlToShare
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
    <Router>
      <main>

          <Header />
          <Route path="/" exact render={() => {
            return <OrganiserView eventData={this.state.eventData} handleChange={this.handleChange} onSubmit={this.onSubmit} urlToShare={this.state.urlToShare} display={this.state.display}/>
          }}
          />

          <Route path="/event/:eventId" render={() => {
            return <UserView />
          }}
          />
          <Footer />

      </main>
    </Router>
    )
  }
}

export default App;
