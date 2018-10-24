import React from "react";
import Suggestion from './Suggestion';
const formatDate = require('date-fns/format')

  class SuggestionList extends React.Component {
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
          },()=>console.log(this.state.votes))
        })
    }

      render() {
      return (
        <React.Fragment>

            <section className="suggestionList">
                
                <header className="list__header">
                    <h2 className="list__title">Let's meet on {formatDate(this.state.event.date_time, 'ddd D MMMM YYYY')} at {formatDate(this.state.event.date_time, 'h.mm a')}</h2> 
                </header>
            
                <section className="suggestionlist__view">
                    <header className="suggestionlist__header"> 
                        <h2  className="suggestionlist__title">Suggestions</h2>
                        <button className="btn btn__refresh">Refresh</button>
                    </header>
                    {Object.values(this.state.suggestions).map(suggestion => {
                        const votes = this.state.votes.filter(vote => vote.suggestionId === suggestion.id)
                        return  <Suggestion suggestion={suggestion} votes={votes} key={suggestion.id}/>
                    })}
                </section>
            
            </section>

        </React.Fragment>
      )
    }
    }

export default SuggestionList;