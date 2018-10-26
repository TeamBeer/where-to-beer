import React from "react";
// import io from "socket.io-client";

import Header from "./Header"
import Footer from "./Footer"
import '../styles/base/base.scss';
import '../styles/base/forms.scss';
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
      display: "creation", //'creation' or 'confirmation' or 'userView'
      toggle: false
    }
    this.createNewEvent = this.createNewEvent.bind(this)
    this.registerUser = this.registerUser.bind(this);
    this.uniqueEventName = this.uniqueEventName.bind(this);
    this.createNewSuggestion = this.createNewSuggestion.bind(this);



  }

  componentDidMount() {
    this.initialFetch()
  }


  initialFetch() {
    const fromStorage = localStorage.getItem('memberId')
    if (fromStorage) {
      const { memberId } = JSON.parse(fromStorage);
      return fetch(`/api/member/${memberId}`)
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
        })
      })
      .catch(console.error)
  }



  registerUser(e, memberName, eventId) {
    e.preventDefault();
    const memberData = { memberName, eventId };
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


  createNewSuggestion(newSuggestion) {
    fetch('/api/suggestion', {
      method: 'post',
      body: JSON.stringify(newSuggestion),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .catch(console.error)
  }

  render() {

    return (

      <Router>
        <main>

          <Header />
          <Route path="/" exact render={({ match, history }) => {
            return <OrganiserView createdEvent={this.state.createdEvent}
              eventData={this.state.eventData}
              createNewEvent={this.createNewEvent}
              urlToShare={this.state.urlToShare}
              uniqueEventName={this.uniqueEventName}
              display={this.state.display} />
          }}
          />

          <Route path="/event/:eventId" render={({ match, history }) => {
            return <UserView memberId={this.state.memberId}
              eventId={match.params.eventId}
              isMember={this.state.isMember}
              registerUser={this.registerUser}
              getEvent={this.getEvent}
              createNewSuggestion={this.createNewSuggestion} />
          }}
          />
          <Footer />

        </main>
      </Router>
    )
  }
}

export default App;
