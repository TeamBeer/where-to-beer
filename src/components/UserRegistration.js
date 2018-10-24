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
      <form onSubmit={e => registerUser(e)}>
        name: <input onChange={e => this.handleChange(e)} type="text" name="userName" id="" value={this.state.memberName} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default UserRegistration;