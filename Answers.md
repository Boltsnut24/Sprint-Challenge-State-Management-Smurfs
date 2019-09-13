1. What problem does the context API help solve?

  Allows use to share data between different levels of componenents without having to rely on props drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions - These are similar to functions based on what payload data is coming in one will be executed.
  Reducers - This is how our actions effect the actual data
  Store - This holds our states and is the single source of truth because while actions/reducers can modify what is in our state, they don't actually hold the data like store does.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
 
  Application state is a global state that can be accessed by any componenet and Component state is locallized to the component it is defined in but could be passed around as a prop.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux-thunk is a middleware that allows us to run async operations in redux. It changes action-creators by allowing them to use API's as they are asynchronous now.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

  Context API because I could actually use it. Redux seems much more robust but I haven't been able to grasp it's concepts at all.
