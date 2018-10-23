import React from "react";


class App extends React.Component {
  constructor() {
  super();
  }


  render() {

return (

<main>
  <header className="app__header">
    <h1 className="app__title">Beer?</h1>
  </header>

{/* organiser-setup */}

  <section className="organiserSetup">
    <header className="setup__header">
        <p>Organise at drink&hellip; all fields required unless stated</p>
    </header>

    <form className="setupform">
            <div>
                <label className="setupform__namelabel" htmlFor="name">Name</label>
                <input className="setupform__name" type="text" name="name" value="" placeholder="NAME" required />
            </div> 
            <div>
                <label className="setupform__datelabel" htmlFor="date">Date</label>
                <input className="setupform__date" type="date" name="date" value="" placeholder="DATE" required />
            </div>  
            <div>
                <label className="setupform__timelabel" htmlFor="time">Time</label>
                <input className="setupform__time" type="time" name="time" value="" placeholder="TIME" required />
            </div>
            <div>
                <label className="setupform__venuelabel" htmlFor="time">Pub Name</label>
                    <input className="setupform__venue" type="text" name="venue" value="" placeholder="PUB NAME" required />
            </div>           
            <div>
                <label className="setupform__postcodelabel" htmlFor="postcode">Postcode</label>
                <input className="setupform__postcode" type="text" name="postcode" value="" placeholder="POSTCODE" required />
            </div>
            <div>
                <label className="ssetupform__commentlabel" htmlFor="comment">Postcode</label>
                <textarea className="setupform__comment" name="comment" placeholder="Comment (optional)"></textarea>
            </div>
            <div>
                <button className="btn btn__submit" type="submit" value="">Create</button>
            </div>
        </form>
  </section>

{/* organiser-confirmation */}

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

        <button className="btn btn__edit">Edit</button>
        <button className="btn btn__submit" type="submit" value="">Get Invite Link</button>

        <p className="confirm__viewlink">http://fancyapint.com/electric-dog</p>
    </section>

  </section>
</main>

    )

  }

}

export default App;
