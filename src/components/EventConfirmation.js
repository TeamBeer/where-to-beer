import React from "react";


function EventConfirmation(){

      return (
        <React.Fragment>

          <section className="organiserConfirm">
              
              <header className="confirm__header">
                  <h2 className="confirm_title">Let's meet on Friday 26 October at 7pm</h2>
              </header>
              
              <section className="confirm__suggestion">
                <h3>Your suggestion</h3>
                <h4 className="suggestion_subtitle">The Star and Garter<span>W1F 7NX</span></h4>
                  <p className="suggestion_description">
                    It's got a nice  quiet room upstairs so we should get a seat
                  </p>
                  <button className="confirm__editbtn btn">Edit</button>
                  <button className="confirm__linkbtn btn">Get Invite Link</button>
                  <p className="confirm__viewlink">http://fancyapint.com/electric-dog</p>
              </section>

          </section>

        </React.Fragment>
      )
    }  

export default EventConfirmation;