import React from "react";

function Suggestion() {

  return (
    <React.Fragment>

      <article className="suggestion__card suggestion--winner">

        <header className="suggestion_header">
          <h3 className="suggestion_title">
            <span className="suggestion_kicker">Joe suggests&hellip;</span>The Star and Garter
                  </h3>
          <button className="btn btn__vote">+</button>
        </header>

        <p className="suggestion_description">
          It's got a nice  quiet room upstairs so we should get a seat
              </p>

        <footer className="suggestion_footer">
          <div className="suggestion_votes">
            <span className="suggestion_count">2</span> Votes
                  </div>
          <ul className="suggestion_voters">
            <li className="suggestion_voter">P</li>
            <li>M</li>
          </ul>
        </footer>

      </article>

    </React.Fragment>
  )
}

export default Suggestion;