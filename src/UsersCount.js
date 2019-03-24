import React from 'react'

const UsersCount = (props) => {
  return (
    <div id="users-count">
      {
        props.users && <p><b>User Count:</b> {props.users.length}</p>
      }
    </div>
  )
}

export default UsersCount