## Overview
All of the React and Redux setup has been done for you. The goal is to connect a button to a fetch event and render the results.

## Setup
* Run `npm i` and `npm start`

## Normal React State
* In the Users component, create a method called `getUsers` and call it when the button is clicked
* In the getUsers method, make a fetch call to the following endpoint:
  https://jsonplaceholder.typicode.com/users
* Create state in the Users component with a property of `users`. Set users to the results of the fetch call. 
* Map through the users and display the results. Include the following properties in some way:
  * name
  * username
  * email
  * website

## Redux state
* Delete all references to state in the Users component
* Import `connect` from `react-redux` and create a `mapStateToProps` and a `mapDispatchToProps` function
* In the mapStateToProps function, return a prop called `users` with a value of `state.users`
* In the mapDispatchToProps function, return a prop called `setUsers` that dispatches an action with type: `SET_USERS` and value: (users returned from fetch)
  * Don't worry that there isn't an `actions/index.js` file, you can dispatch the action inline 
* Connect the component appropriately 
* Now, the `getUsers` method that you defined above `render` should call fetch and then call `this.props.setUsers` with the results
* Map through the users as we did above

* In the `UsersCount` compononet, create a `mapStateToProps` function exactly as we did above to pass in the users, there will be no `mapDispatchToProps` function here

## Closing
* If you did everything correctly you should have a connected Redux app that pulls in the results from an API and creates a list. Additionally, at the bottom of the list you should see a `user count` from the UserCount component
