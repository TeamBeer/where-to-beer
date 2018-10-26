import React from 'react';
import SuggestionList from './SuggestionList';
import SuggestionCreate from './SuggestionCreate';
import UserRegistration from './UserRegistration';

  class UserView extends React.Component {
    constructor() {
    super();
    this.state={
      event:{},
      suggestions:{},
      votes:{}
    }

    this.getEvent = this.getEvent.bind(this)
    this.addVote = this.addVote.bind(this)
    this.removeVote = this.removeVote.bind(this)
    }

    componentDidMount() {
      this.getEvent(this.props.eventId)
    }

    getEvent(eventId) {
    fetch(`/api/event/${eventId}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
          event:body.event,
          suggestions:body.suggestions,
          votes:body.votes
      })
    })
  }

  addVote(suggestionId) {
    console.log(this.props.memberId)
    console.log(this.state.votes)
    fetch('/api/vote', {
      method: 'post',
      body: JSON.stringify({suggestionId:suggestionId,memberId:this.props.memberId}),
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
      body: JSON.stringify({suggestionId:suggestionId,memberId:this.props.memberId}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        this.getEvent(this.props.eventId)
      })
      .catch(console.error)
  }

// const UserView = ({ isMember, registerUser, memberName, event, suggestions, votes, eventId }) => {
//   console.log(eventId)

  render() {
  return (
    <React.Fragment>
      {!this.props.isMember &&
        <UserRegistration registerUser={this.props.registerUser} event={this.state.event} />
      }
      {this.props.isMember &&
        <React.Fragment>

          <SuggestionList getEvent={this.getEvent} eventId={this.props.eventId} event={this.state.event} suggestions={this.state.suggestions} votes={this.state.votes} addVote={this.addVote} removeVote={this.removeVote} memberId={this.props.memberId} />
          <SuggestionCreate memberId={this.props.memberId} eventId={this.state.event.id} eventName={this.props.eventId} getEvent={this.getEvent} createNewSuggestion={this.props.createNewSuggestion} />
        </React.Fragment>
      }
    </React.Fragment>
  )}
}

export default UserView;
