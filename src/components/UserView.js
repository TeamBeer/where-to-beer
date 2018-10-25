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
          <SuggestionList getEvent={this.getEvent} eventId={this.props.eventId} event={this.state.event} suggestions={this.state.suggestions} votes={this.state.votes} />
          <SuggestionCreate getEvent={this.getEvent} />
        </React.Fragment>
      }
    </React.Fragment>
  )}
}


export default UserView;
