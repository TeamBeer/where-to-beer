import React from "react";
import Suggestion from './Suggestion';
const formatDate = require('date-fns/format')

  class SuggestionList extends React.Component {
    constructor() {
      super();
    }
      render() {
      return (
        <React.Fragment>

            <section className="suggestionList">
                
                <header className="list__header">
                    <h2 className="list__title">
                        Let's meet on 
                        {formatDate(this.props.event.date_time, 'ddd D MMMM YYYY')} at 
                        {formatDate(this.props.event.date_time, 'h.mm a')}
                    </h2> 
                </header>
            
                <section className="suggestionlist__view">
                    <header className="suggestionlist__header"> 
                        <h2  className="suggestionlist__title">Suggestions</h2>
                        <button className="btn btn__refresh">Refresh</button>
                    </header>
                    {Object.values(this.props.suggestions).map(suggestion => {
                        const votes = this.props.votes.filter(vote => vote.suggestionId === suggestion.id)
                        return  <Suggestion suggestion={suggestion} votes={votes} key={suggestion.id}/>
                    })}
                </section>
            
            </section>

        </React.Fragment>
      )
    }
    }

export default SuggestionList; 