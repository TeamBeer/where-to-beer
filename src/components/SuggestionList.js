import React from "react";
import Suggestion from './Suggestion';

function SuggestionList(){

      return (
        <React.Fragment>

            <section className="suggestionList">
                
                <header className="list__header">
                    <h2 className="list__title">Let's meet on Friday 26 October at 7pm</h2>
                </header>
            
                <section className="suggestionlist__view">
                    <header className="suggestionlist__header"> 
                        <h2  className="suggestionlist__title">Suggestions</h2>
                        <button className="btn btn__refresh">Refresh</button>
                    </header>
                    <Suggestion />
                </section>
            
            </section>

        </React.Fragment>
      )
    }  

export default SuggestionList;