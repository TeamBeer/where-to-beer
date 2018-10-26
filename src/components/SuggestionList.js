import React from "react";
import Suggestion from './Suggestion';
import '../styles/components/SuggestionList.scss';
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
                        <span>{formatDate(this.props.event.date_time, 'ddd D MMMM YYYY')}</span> at&nbsp;
                        <span>{formatDate(this.props.event.date_time, 'h.mm a')}</span>
                    </h2> 
                </header>
                <section className="list__all">
                    <h4 className="list__organiser">Conductor<span>{this.props.conductor}</span></h4>
                    {/* <h4 className="list__memberstitle">Orchestra</h4> */}
                    {/* <ul className="list__members menu--settings">
                        <li>Phil</li>
                        <li>Dan</li>
                        <li>Joe</li>
                    </ul> */}
                </section>
            
                <section className="suggestionlist__view">
                    <header className="suggestionlist__header"> 
                        <h2  className="suggestionlist__title">Suggestions</h2>
                        {/* <button className="btn btn__refresh">Refresh</button> */}
                    </header>
                    {Object.values(this.props.suggestions).map(suggestion => {
                        const votes = this.props.votes.filter(vote => vote.suggestionId === suggestion.id)
                        return  <Suggestion addVote={this.props.addVote} removeVote={this.props.removeVote} suggestion={suggestion} votes={votes} key={suggestion.id} memberId={this.props.memberId}/>
                    })}
                </section>
            
            </section>

        </React.Fragment>
      )
    }
    }

export default SuggestionList; 