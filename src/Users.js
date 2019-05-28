import React, { Component, Fragment } from 'react'
import { Button } from '@material-ui/core'

class Users extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">Get Users</Button>
        </div>
        <div className="users-block">
          {/* Map through users here */}
        </div>
      </Fragment>
    )
  }
}

export default Users