import React from "react";

class SuggestionCreate extends React.Component{
  constructor(){
    super()

    this.state={
      suggestionData: {
        memberId: "",
        eventId: "",
        venueName: "",
        postcode: "",
        reason: ""
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  resetState(){
    this.setState({
      suggestionData: {
        memberId: "",
        eventId: "",
        venueName: "",
        postcode: "",
        reason: ""
      }
    })
  }

  handleChange(event){
    event.preventDefault()
    const newSuggestion = Object.assign({}, this.state.suggestionData)
    newSuggestion[event.target.name] = event.target.value
    this.setState({
      suggestionData: newSuggestion
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const suggestionData = Object.assign({}, this.state.suggestionData)
    suggestionData.memberId = this.props.memberId
    suggestionData.eventId = this.props.eventId
    this.props.createNewSuggestion(suggestionData)
    this.resetState()
    this.props.getEvent(this.props.eventName)
  }




  render(){

    return (
        <React.Fragment>
            <section className="suggestionCreate">

                <h3>Make a suggestion</h3>

                <form onSubmit={this.handleSubmit} className="suggestionform">

                    <div>
                        <label className="suggestionform__venuelabel" htmlFor="venue">Pub Name</label>
                            <input onChange={this.handleChange} className="suggestionform__venue" type="text" name="venueName" id="venue" value={this.state.suggestionData.venueName} pattern="[A-Za-z0-9\s]{1,}" required /><span
                     className="validity"></span>
                    </div>
                    <div>
                        <label  className="suggestionform__postcodelabel" htmlFor="postcode">Postcode</label>
                        <input onChange={this.handleChange} className="suggestionform__postcode" type="text" name="postcode" id="postcode" value={this.state.suggestionData.postcode} pattern="^([Gg][Ii][Rr]
         0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})$" required /><span
             className="validity"></span>



                    </div>
                    <div>
                        <label className="suggestionform__commentlabel" htmlFor="comment">Comment</label>
                        <textarea onChange={this.handleChange} className="suggestionform__comment" name="reason" id="comment" value={this.state.suggestionData.reason}></textarea>
                    </div>
                    <div>
                        <button className="btn btn__submit" type="submit" value="">Submit</button>
                    </div>
                </form>

            </section>

        </React.Fragment>

    )

  }


}


export default SuggestionCreate;
