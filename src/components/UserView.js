import React from 'react';
import SuggestionList from './SuggestionList';
import SuggestionCreate from './SuggestionCreate';
import UserRegistration from './UserRegistration';
import io from "socket.io-client";
import Page404 from "./Page404";

class UserView extends React.Component {
  constructor() {
    super();
    this.state = {
      event: {},
      suggestions: [],
      votes: {}
    }

    this.getEvent = this.getEvent.bind(this);
    this.addVote = this.addVote.bind(this);
    this.removeVote = this.removeVote.bind(this);
    this.broadcastSuggestions = this.broadcastSuggestions.bind(this);
    // this.updateSuggestions = this.updateSuggestions.bind(this);

    this.socket = io(window.location.origin);

    this.socket.on('RECEIVE_SUGGESTIONS', function (data) {
      updateSuggestions(data);
    });

    const updateSuggestions = data => {
      this.setState({
        suggestions: data.suggestions,
        votes: data.votes
      })
    };
  }

  componentDidMount() {
    this.getEvent(this.props.eventId);
    const eventName = this.props.eventId;
    this.socket.emit('JOIN', eventName);
  }



  getEvent(eventId) {
    fetch(`/api/event/${eventId}`)
      .then(response => response.json())
      .then(body => {
        this.setState({
          event: body.event,
          suggestions: body.suggestions,
          votes: body.votes
        }, () => this.broadcastSuggestions(this.state.suggestions, this.state.votes))
      });
  }

  broadcastSuggestions(suggestions, votes) {
    const eventName = this.props.eventId;
    this.socket.emit('SEND_SUGGESTIONS', eventName, {
      suggestions,
      votes
    })
  }

  addVote(suggestionId) {
    fetch('/api/vote', {
      method: 'post',
      body: JSON.stringify({ suggestionId: suggestionId, memberId: this.props.memberId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(body => {
        this.getEvent(this.props.eventId)
      })
      .catch(console.error)
  }

  removeVote(suggestionId) {
    console.log(this.props.memberId)
    console.log(this.state.votes)
    fetch('/api/vote', {
      method: 'delete',
      body: JSON.stringify({ suggestionId: suggestionId, memberId: this.props.memberId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        this.getEvent(this.props.eventId)
      })
      .catch(console.error)
  }


  render() {
    return (
      <React.Fragment>
        {!this.state.event.hasOwnProperty("id")
         ? <Page404 />
         : null}
        {!this.props.isMember && this.state.event.hasOwnProperty("id") &&
          <UserRegistration registerUser={this.props.registerUser} />
        }
        {this.props.isMember && this.state.event.hasOwnProperty("id") &&
          <React.Fragment>

            <SuggestionList getEvent={this.getEvent} eventId={this.props.eventId} event={this.state.event} suggestions={this.state.suggestions} votes={this.state.votes} addVote={this.addVote} removeVote={this.removeVote} memberId={this.props.memberId} />
            <SuggestionCreate memberId={this.props.memberId} eventId={this.state.event.id} eventName={this.props.eventId} getEvent={this.getEvent} createNewSuggestion={this.props.createNewSuggestion} />
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}


export default UserView;
