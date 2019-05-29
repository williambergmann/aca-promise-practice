import React, { Component, Fragment } from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { getUsersFromAPI } from './actions'

class Users extends Component {
  getUsers = () => {
    this.props.getUsersFromAPI()
  }

  render() {
    console.log(this.props.users)
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">Get Users</Button>
        </div>
        <div className="users-block">
          {this.props.users.map((user) => (
            <div>
              <p>name: {user.name}</p>
              <p>username: {user.username}</p>
              <p>email: <a href = {`mailto: ${user.email}`}>{user.email}</a></p>
              <p>website: <a href={`https://${user.website}`} target=''>{user.website}</a></p>
            </div>
          ))
          }
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersFromAPI: () => dispatch(getUsersFromAPI())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)