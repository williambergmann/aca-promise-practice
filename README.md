## Overview
Most of the React and Redux setup has been done for you. The goal is to connect a button to a fetch event and render the results.

## Setup
* Run `npm i` and `npm start`

## Normal React State
* Create state in the Users component with a property of `users`. The default value can be an empty array: `[]`
* In the same component, create a method called `getUsers` and call it when the button is clicked
* Inside this method, make a fetch call to the following endpoint:
  https://jsonplaceholder.typicode.com/users
* Set users to the results of the fetch call. 
* Map through the users and display the results. Include the following properties in some way:
  * name
  * username
  * email
  * website

## Redux state
* Delete all references to state in the Users component
* Import `{ connect }` from `react-redux` and create a `mapStateToProps` and a `mapDispatchToProps` function
* In the mapStateToProps function, return a prop called `users` with a value of `state.users`
* In the mapDispatchToProps function, return a prop called `setUsers` that dispatches an action with type: `SET_USERS` and value: (users returned from fetch)
  * You will need to create an `actions/index.js` file under the src folder. 
  * Export a function (action creator) called `setUsers` that takes one parameter (users)
* Connect the component appropriately 
* Now, the `getUsers` method that you defined above `render` should call fetch and then call `this.props.setUsers` with the results
* Map through the users as we did above

* In the `UsersCount` component, create a `mapStateToProps` function exactly as we did above to pass in the users, there will be no `mapDispatchToProps` function here

## Redux thunk
* Currently our action is being called after the fetch but we can actually put the fetch inside of it's own action function to create an "asynchronous action". We do this using `redux-thunk`
* First we need to import `thunk` from `redux-thunk` as well as `applyMiddleware` from `redux` in our `store.js`
* Then add `applyMiddleware(thunk)` as the third parameter to the `createStore` function. This is what allows us to make asynchronous calls in our actions
* Inside `actions/index.js` create a new function called `getUsersFromAPI` and export it just like the other one.
* Inside this function, we will return a new arrow function that starts like this: `return (dispatch) => {}`
* Move the fetch functionality inside of this function and send the final results to the previous action (`setUsers`) like this: `.then(results => dispatch(setUsers(results)))`
* Now, in the Users component, switch the `mapDispatchToProps` so that the prop is called `getUsersFromAPI` and make sure to switch out the appropriate action (the new one will need to be imported and you will no longer need the "users" parameter)
* At this point we should be able to remove everything in the `getUsers` method and simply call: `this.props.getUsersFromAPI()`

## Closing
* If you did everything correctly you should have a connected Redux app that pulls in the results from an API and creates a list. Additionally, at the bottom of the list you should see a `user count` from the UserCount component
