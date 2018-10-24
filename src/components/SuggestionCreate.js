import React from "react";

function SuggestionCreate(){

      return (
        <React.Fragment>
            <section className="suggestionCreate">
                
                <h3>Make a suggestion</h3>
                
                <form className="suggestionform">
                    <div>
                        <label className="suggestionform__namelabel" htmlFor="name">Name</label>
                        <input className="suggestionform__name" type="text" name="name" id="name" value="" placeholder="NAME" required />
                    </div> 
                    <div>
                        <label className="suggestionform__venuelabel" htmlFor="venue">Pub Name</label>
                            <input className="suggestionform__venue" type="text" name="venue" id="venue" value="" placeholder="PUB NAME" required />
                    </div>           
                    <div>
                        <label className="suggestionform__postcodelabel" htmlFor="postcode">Postcode</label>
                        <input className="suggestionform__postcode" type="text" name="postcode" id="postcode" value="" placeholder="POSTCODE" required />
                    </div>
                    <div>
                        <label className="suggestionform__commentlabel" htmlFor="comment">Comment</label>
                        <textarea className="suggestionform__comment" name="comment" id="comment" placeholder="Comment (optional)"></textarea>
                    </div>
                    <div>
                        <button className="btn btn__submit" type="submit" value="">Submit</button>
                    </div>
                </form>
                
            </section>

        </React.Fragment>
      )
    }  

export default SuggestionCreate;