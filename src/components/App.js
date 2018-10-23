import React from "react";
import '../styles/components/app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time:"",
      venue_name:"",
      comment:""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    console.log(event.target.name, event.target.value);
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
              <input className="setupform__name" onChange={event=>this.handleChange(event)} type="text" name="name" value="" placeholder="NAME" pattern="[A-Za-z]{3,}" required /><span
                className="validity"></span>
            </div>
            <div>
              <label className="setupform__datelabel" htmlFor="date">Date</label>
              <input className="setupform__date" onChange={event=>this.handleChange(event)}  type="date" name="date" value="" placeholder="DATE" required /><span
                className="validity"></span>
            </div>
            <div>
              <label className="setupform__timelabel" htmlFor="time">Time</label>
              <input className="setupform__time" onChange={event=>this.handleChange(event)} type="time" name="time" value="" placeholder="TIME" required /><span
                className="validity"></span>
            </div>
            <div>
              <label className="setupform__venuelabel" htmlFor="venue_name">Pub Name</label>
              <input className="setupform__venue" onChange={event=>this.handleChange(event)} type="text" name="venue_name" value="" placeholder="PUB NAME" pattern="[A-Za-z]{1,}" required /><span
                className="validity"></span>
            </div>
            <div>
              <label className="setupform__postcodelabel" htmlFor="postcode">Postcode</label>
              <input className="setupform__postcode" onChange={event=>this.handleChange(event)} type="text" name="postcode" value="" placeholder="POSTCODE" pattern="^([Gg][Ii][Rr]
    0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})$" required /><span
        className="validity"></span>
            </div>
            <div>
              <label className="ssetupform__commentlabel" htmlFor="comment">Comment</label>
              <textarea className="setupform__comment" onChange={event => this.handleChange(event)} name="comment" value="" placeholder="Comment (optional)"></textarea>
            </div>
            <div>
              <button className="btn btn__submit" type="submit">Create</button>
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
