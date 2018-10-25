import React from 'react';
import SuggestionList from './SuggestionList';
import SuggestionCreate from './SuggestionCreate';
import UserRegistration from './UserRegistration';

  class UserView extends React.Component {
    constructor() {
    super();
    this.state={
      event:{
          word:"hello"
      },
      suggestions:{},
      votes:{}
    }

    this.getEvent = this.getEvent.bind(this)
    this.addVote = this.addVote.bind(this)
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
    fetch('/api/vote', {
      method: 'post',
      body: JSON.stringify({suggestionId:suggestionId,memberId:this.props.memberId}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(body => {
        console.log(body)
      })
      .catch(console.error)
  }

// const UserView = ({ isMember, registerUser, memberName, event, suggestions, votes, eventId }) => {
//   console.log(eventId)

  render() {
  return (
    <React.Fragment>
      {!this.props.isMember &&
        <UserRegistration registerUser={this.props.registerUser} />
      }
      {this.props.isMember &&
        <React.Fragment>

          <SuggestionList getEvent={this.getEvent} eventId={this.props.eventId} event={this.state.event} suggestions={this.state.suggestions} votes={this.state.votes} addVote={this.addVote} />
          <SuggestionCreate memberId={this.props.memberId} eventId={this.state.event.id} eventName={this.props.eventId} getEvent={this.getEvent} createNewSuggestion={this.props.createNewSuggestion} />
        </React.Fragment>
      }
    </React.Fragment>
  )}
}


export default UserView;
