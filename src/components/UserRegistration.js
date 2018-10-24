import React from 'react';

class UserRegistration extends React.Component {
  constructor() {
    super();
    this.state = {
      memberName: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      memberName: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={e => this.props.registerUser(e, this.state.memberName)}>
        <label htmlFor="userName">Your name (no spaces)</label>
        <input onChange={e => this.handleChange(e)} type="text" name="userName" id="userName" value={this.state.memberName} pattern="[A-Za-z]{3,}" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default UserRegistration;