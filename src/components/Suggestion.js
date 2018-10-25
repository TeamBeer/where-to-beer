import React from "react";

const Suggestion = ({suggestion, votes, addVote, removeVote, memberId}) => {
  return (
    <React.Fragment>

      <article className="suggestion__card suggestion--winner">

        <header className="suggestion_header">
          <h3 className="suggestion_title">
            <span className="suggestion_kicker">{suggestion.name} suggests&hellip;</span>{suggestion.venue_name}
                  </h3>
                  {votes.filter((vote)=>vote.memberId===memberId).length < 1 && (
          <button className="btn btn__vote" onClick={(e)=>(addVote(suggestion.id))}>+</button>
                  )}
                  {votes.filter((vote)=>vote.memberId===memberId).length > 0 && (
          <button className="btn btn__vote" onClick={(e)=>(removeVote(suggestion.id))}>-</button>
                  )}
        </header>

        <p className="suggestion_description">
          {suggestion.reason}
              </p>

        <footer className="suggestion_footer">
          <div className="suggestion_votes">
            <span className="suggestion_count">{votes.length}</span> Votes
                  </div>
          <ul className="suggestion_voters">
          {votes.map(vote => {
            return <li className="suggestion_voter" key={vote.voteId}>{vote.memberName}</li>
          })}
          </ul>
        </footer>

      </article>

    </React.Fragment>
  )
}

export default Suggestion;