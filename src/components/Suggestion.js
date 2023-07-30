import React from "react";
import "../styles/components/Suggestion.scss";

const Suggestion = ({ suggestion, votes, addVote, removeVote, memberId }) => {
  return (
    <React.Fragment>
      <article className="suggestion__card suggestion--winner">
        <header className="suggestion__header">
          <h3 className="suggestion__title">
            <span className="suggestion__kicker">
              {suggestion.name} suggests&hellip;
            </span>
          </h3>
          {votes.filter((vote) => vote.memberId === memberId).length < 1 && (
            <button
              className="btn btn__vote btn--small"
              onClick={(e) => addVote(suggestion.id)}
            >
              <i className="fas fa-plus"></i>
            </button>
          )}
          {votes.filter((vote) => vote.memberId === memberId).length > 0 && (
            <button
              className="btn btn__vote btn--small"
              onClick={(e) => removeVote(suggestion.id)}
            >
              <i className="fas fa-minus"></i>
            </button>
          )}
        </header>

        <div className="suggestion__info">
          <div className="suggestion__pub-details">
            <h2 className="suggestion__pub-name">
              <span>{suggestion.venue_name}</span>
            </h2>
            <h3 className="suggestion__pub-postcode">
              <span>{suggestion.postcode}</span>
            </h3>
          </div>
          {!!suggestion.reason && (
            <p className="suggestion__description">{suggestion.reason}</p>
          )}
        </div>

        <footer className="suggestion__footer">
          <div className="suggestion__votes"></div>
          <ul className="suggestion__voters menu--settings">
            {votes.map((vote) => {
              return (
                <li className="suggestion__voter" key={vote.voteId}>
                  {vote.memberName.charAt(0).toUpperCase()}
                </li>
              );
            })}
          </ul>
        </footer>
      </article>
    </React.Fragment>
  );
};

export default Suggestion;
