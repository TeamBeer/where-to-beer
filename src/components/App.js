import React from "react";
import io from "socket.io-client";

import Header from "./Header"
import Footer from "./Footer"
import '../styles/base/base.scss';
import OrganiserView from "./OrganiserView"
import UserView from "./UserView"

const { adjArr, nounArr } = require('../wordarrays.js');
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../styles/components/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      createdEvent: {},
      urlToShare: "", //populated by createNewEvent when form is submitted
      isMember: false, // controlled by registerUser when name submitted
      memberId: 0,
      eventData: {
        memberName: "",
        date: "",
        time: "19:00",
        venueName: "",
        venuePostcode: "",
        venueReason: ""
      },
      display: "creation" //'creation' or 'confirmation' or 'userView'
    }
    this.createNewEvent = this.createNewEvent.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.uniqueEventName = this.uniqueEventName.bind(this);

    this.socket = io('http://localhost:8080');

    this.socket.on('RECEIVE_MESSAGE', function (data) {
      addMessage(data);
    });
    const addMessage = data => {
      console.log(data);
      this.setState({ registeredUser: data.user })
    };
  }

  componentDidMount() {
    if (!!localStorage.getItem('memberId')) {
      const { memberId } = JSON.parse(localStorage.getItem('memberId'));
      fetch(`/api/member/${memberId}`)
        .then(response => response.json())
        .then(body => {
          this.setState({
            isMember: true,
            memberId: body.id,
            memberName: body.name
          })
        })
        .catch(console.error)
    }
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
    const eventName = this.uniqueEventName()
    //  concatenate the date and time in the eventTime object iso 8601 date format
    const { date, time } = this.state.eventData;
    const dateTime = `${date}T${time}:00`;
    const eventData = Object.assign({}, this.state.eventData, { dateTime })
    eventData.eventName = eventName
    // clean up eventData object to fit {memberName, eventName, dateTime, venueName, venuePostcode, venueReason} shape
    delete eventData.date;
    delete eventData.time;
    // pass eventData object to createNewEvent on database function
    this.createNewEvent(eventData);
  }

  uniqueEventName() {
    const adjectives = adjArr;
    const nouns = nounArr;
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adj}-${noun}`;
  }

  // On page load, initial user/group starter will fill out form, and on form submit, will run the following function to post to database
  createNewEvent(eventData) {
    fetch('/api/event', {
      method: 'post',
      body: JSON.stringify(eventData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(body => {
        const urlToShare = `localhost:8080/event/${body.event.name}`
        this.setState({
          urlToShare,
          createdEvent: body,
          display: 'confirmation',
          eventData: {
            date: "",
            time: "19:00",
            venueName: "",
            venuePostcode: "",
            eventReason: ""
          }
        })
      })
      .catch(console.error)
  }

  registerUser(e, memberName) {
    e.preventDefault();

    this.socket.emit('SEND_MESSAGE', {
      user: memberName
    })

    const memberData = { memberName };
    fetch('/api/member', {
      method: 'post',
      body: JSON.stringify(memberData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(body => {
        this.setState({
          isMember: true,
          memberId: body.id,
          memberName: body.name
        })
        const member = JSON.stringify({ memberId: body.id })
        localStorage.setItem('memberId', member)
      })
      .catch(console.error)
  }

  render() {

    return (

      <Router>
        <main>

          <Header />
          <Route path="/" exact render={({ match, history }) => {
            return <OrganiserView createdEvent={this.state.createdEvent} eventData={this.state.eventData} handleChange={this.handleChange} onSubmit={this.onSubmit} urlToShare={this.state.urlToShare} display={this.state.display} />
          }}
          />

          <Route path="/event/:eventId" render={({ match, history }) => {
            return <UserView isMember={this.state.isMember} registerUser={this.registerUser} />
          }}
          />
          <Footer />

        </main>
      </Router>
    )
  }
}

export default App;
