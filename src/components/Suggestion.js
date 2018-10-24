import React from "react";

const Suggestion = ({suggestion, votes}) => {
  return (
    <React.Fragment>

      <article className="suggestion__card suggestion--winner">

        <header className="suggestion_header">
          <h3 className="suggestion_title">
            <span className="suggestion_kicker">{suggestion.name} suggests&hellip;</span>{suggestion.venue_name}
                  </h3>
          <button className="btn btn__vote">+</button>
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
            return <li className="suggestion_voter">{vote.memberName}</li>
          })}
          </ul>
        </footer>

      </article>

    </React.Fragment>
  )
}

export default Suggestion;