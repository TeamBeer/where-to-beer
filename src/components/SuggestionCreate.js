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
  }




  render(){

    return (
        <React.Fragment>
            <section className="suggestionCreate">

                <h3>Make a suggestion</h3>

                <form onSubmit={this.handleSubmit} className="suggestionform">

                    <div>
                        <label className="suggestionform__venuelabel" htmlFor="venue">Pub Name</label>
                            <input onChange={this.handleChange} className="suggestionform__venue" type="text" name="venueName" id="venue" value={this.state.suggestionData.venueName} placeholder="PUB NAME" required />
                    </div>
                    <div>
                        <label  className="suggestionform__postcodelabel" htmlFor="postcode">Postcode</label>
                        <input onChange={this.handleChange} className="suggestionform__postcode" type="text" name="postcode" id="postcode" value={this.state.suggestionData.postcode} placeholder="POSTCODE" required />
                    </div>
                    <div>
                        <label className="suggestionform__commentlabel" htmlFor="comment">Comment</label>
                        <textarea onChange={this.handleChange} className="suggestionform__comment" name="reason" id="comment" value={this.state.suggestionData.reason} placeholder="Comment (optional)"></textarea>
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


// function SuggestionCreate(){
//
      // return (
      //   <React.Fragment>
      //       <section className="suggestionCreate">
      //
      //           <h3>Make a suggestion</h3>
      //
      //           <form className="suggestionform">
      //               {/* <div>
      //                   <label className="suggestionform__namelabel" htmlFor="name">Name</label>
      //                   <input className="suggestionform__name" type="text" name="name" id="name" value="" placeholder="NAME" required />
      //               </div>  */}
      //               <div>
      //                   <label className="suggestionform__venuelabel" htmlFor="venue">Pub Name</label>
      //                       <input className="suggestionform__venue" type="text" name="venue" id="venue" value="" placeholder="PUB NAME" required />
      //               </div>
      //               <div>
      //                   <label className="suggestionform__postcodelabel" htmlFor="postcode">Postcode</label>
      //                   <input className="suggestionform__postcode" type="text" name="postcode" id="postcode" value="" placeholder="POSTCODE" required />
      //               </div>
      //               <div>
      //                   <label className="suggestionform__commentlabel" htmlFor="comment">Comment</label>
      //                   <textarea className="suggestionform__comment" name="comment" id="comment" placeholder="Comment (optional)"></textarea>
      //               </div>
      //               <div>
      //                   <button className="btn btn__submit" type="submit" value="">Submit</button>
      //               </div>
      //           </form>
      //
      //       </section>
      //
      //   </React.Fragment>
//       )
//     }

export default SuggestionCreate;
